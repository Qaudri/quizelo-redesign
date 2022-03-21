export const state = () => ({
  questions: [
    {
      id: 1,
      question: "Who created the HTML language?",

      options: [
        {
          option_id: 1,
          option_tag: "A",
          option_text: "Tim Bernerslee",
          selected: false
        },

        {
          option_id: 2,
          option_tag: "B",
          option_text: "John Doe",
          selected: false
        },

        {
          option_id: 3,
          option_tag: "C",
          option_text: "Tim Bernersly",
          selected: false
        },

        {
          option_id: 4,
          option_tag: "D",
          option_text: "Chris Do",
          selected: false
        },
      ],

      correct_option_id: 1,
      correct_option_value: "Tim Bernerslee",

    },

    {
      id: 2,
      question: "In programming, what's the common practice sentence?",
      options: [
        {
          option_id: 1,
          option_tag: "A",
          option_text: "Good morning",
          selected: false
        },

        {
          option_id: 2,
          option_tag: "B",
          option_text: "Hello World!",
          selected: false
        },

        {
          option_id: 3,
          option_tag: "C",
          option_text: "How are you?",
          selected: false
        },

        {
          option_id: 4,
          option_tag: "D",
          option_text: "What's up?",
          selected: false
        },
      ],
      correct_option_id: 2,
      correct_option_value: "Hello World!",

    },

    {
      id: 3,
      question: "Which of the following software supports team work?",
      options: [
        {
          option_id: 1,
          option_tag: "A",
          option_text: "Canva",
          selected: false
        },

        {
          option_id: 2,
          option_tag: "B",
          option_text: "Adobe Photoshop",
          selected: false
        },

        {
          option_id: 3,
          option_tag: "C",
          option_text: "Flash",
          selected: false
        },

        {
          option_id: 4,
          option_tag: "D",
          option_text: "Figma",
          selected: false
        },
      ],
      correct_option_id: 4,  
      correct_option_value: "Figma",

    },

    {
      id: 4,
      question: "In development, what sign represents the mathematical symbol for multiplication?",
      options: [
        {
          option_id: 1,
          option_tag: "A",
          option_text: "# (Hash symbol)",
          selected: false
        },

        {
          option_id: 2,
          option_tag: "B",
          option_text: "* (Asterisk)",
          selected: false
        },

        {
          option_id: 3,
          option_tag: "C",
          option_text: "& (And symbol)",
          selected: false
        },

        {
          option_id: 4,
          option_tag: "D",
          option_text: "x (Letter x)",
          selected: false
        },
      ],
      correct_option_id: 2, 
      correct_option_value: "* (Asterisk)",
 
    },

    {
      id: 5,
      question: "Which of the following is a CSS framework?",
      options: [
        {
          option_id: 1,
          option_tag: "A",
          option_text: "QaudriCSS",
          selected: false
        },

        {
          option_id: 2,
          option_tag: "B",
          option_text: "Javascript",
          selected: false
        },

        {
          option_id: 3,
          option_tag: "C",
          option_text: "TailwindCSS",
          selected: false
        },

        {
          option_id: 4,
          option_tag: "D",
          option_text: "styles.css",
          selected: false
        },
      ],
      correct_option_id: 3,  
      correct_option_value: "TailwindCSS",

    },
    
  ],

  final_score: 0,
  quiz_summary: [],
  current_question: '',
  current_question_no: 1,
  answered_questions: [],
  question_counter: 0,
  quiz_duration: 10,
})

export const getters = {
  getQuizQuestion(state) {
    return state.current_question
  },

  getOverallQuestionNo(state){
    return state.questions.length
  },

  getFinalScore(state){
    return state.final_score
  },

  getQuizSummary(state){
    return state.quiz_summary
  },

  getQuestion(state){
    if (state.answered_questions.length) {
      
      let answeredQuestionDetails = state.answered_questions.find(answered_question =>
        answered_question.question_id === state.current_question.id
      )

      let modifiedOptions

      if (answeredQuestionDetails) {

        modifiedOptions = state.current_question.options.map(option => {
          let tempOption = Object.assign({}, option);
  
          if (option.option_id === answeredQuestionDetails.user_selected_option_id) {
            tempOption.selected = true
          }
  
          else {
            tempOption.selected = false
          }
  
          return tempOption;
  
        });
      }

      let modifiedQuestion = {};

      modifiedQuestion.question = state.current_question.question;
      modifiedQuestion.id = state.current_question.id;
      modifiedQuestion.correct_option_id = state.current_question.correct_option_id;
      modifiedQuestion.correct_option_value = state.current_question.correct_option_value;
      modifiedQuestion.options = answeredQuestionDetails ? modifiedOptions : state.current_question.options


      return modifiedQuestion;
  

    }else{
      return state.current_question
    }
  },

  getCurrentQuestionNumber(state){
    return state.current_question_no
  }
}

export const actions = {
  retrieveFirstQuestion(context){
    if(context.state.current_question === '') {
      context.commit ("SET_CURRENT_QUESTION", context.state.questions[0])
    }

  },

  retrieveNextQuestion(context){
    if (context.state.question_counter === (context.state.questions.length - 1)) {
    }

    else{
      context.commit("INCREASE_QUESTION_COUNTER");
      context.commit ("SET_CURRENT_QUESTION", context.state.questions[context.state.question_counter])
      context.commit("SET_CURRENT_QUESTION_NUMBER", context.state.current_question_no + 1 )

    }
  },

  retrievePreviousQuestion(context){
    if (context.state.question_counter === 0) {
      
    }

    else{
      context.commit("DECREASE_QUESTION_COUNTER");
      context.commit ("SET_CURRENT_QUESTION", context.state.questions[context.state.question_counter])
      context.commit("SET_CURRENT_QUESTION_NUMBER", context.state.current_question_no - 1)

    }
  },

  chooseOption(context, data){
    // console.log(data)

    context.commit("ADD_TO_ANSWERED_QUESTIONS", data)
  },

  evaluateQuiz(context){
    context.commit("REVIEW_USER_OPTIONS")
  },

  retrieveQuestionByNumber(context, question_no){
    if (question_no >= -1) {
      context.commit("SET_CURRENT_QUESTION", context.state.questions[question_no - 1])
      context.commit("SET_QUESTION_COUNTER", question_no - 1)
      context.commit("SET_CURRENT_QUESTION_NUMBER", question_no )
    } else{
      context.commit("SET_CURRENT_QUESTION", context.state.questions[question_no])
      context.commit("SET_QUESTION_COUNTER", question_no)
      context.commit("SET_CURRENT_QUESTION_NUMBER", question_no )

    }
  }
}


export const mutations = {
  SET_CURRENT_QUESTION(state, payload){
    state.current_question = payload
  },

  INCREASE_QUESTION_COUNTER(state){
    state.question_counter++
  },

  DECREASE_QUESTION_COUNTER(state){
    state.question_counter--
  },

  ADD_TO_ANSWERED_QUESTIONS(state, payload){

    for (let i = 0; i < state.answered_questions.length; i++ ){
      let obj = state.answered_questions[i];

      if (obj.question_id == payload.question.id){
        state.answered_questions.splice(i, 1);
      }""
    }

    state.answered_questions.push({
      question_id: payload.question.id,
      question_correct_option_id: payload.question.correct_option_id,
      question_correct_value: payload.question.correct_option_value,
      question_text: payload.question.question,
      user_selected_option_id: payload.selected_option.option_id,
      user_selected_option_value: payload.selected_option.option_text,
    })

  },

  REVIEW_USER_OPTIONS(state){

    state.questions.forEach(question => {

      let theQuestionAnswer = state.answered_questions.find(answered_question =>
        answered_question.question_id === question.id
      )

      if (theQuestionAnswer) {

        if (question.correct_option_id == theQuestionAnswer.user_selected_option_id) {
          state.quiz_summary.push({
            id: question.id,
            question: question.question,
            user_selected_option_value: theQuestionAnswer.user_selected_option_value,
            question_correct_value: theQuestionAnswer.question_correct_value,
            is_user_option_correct: true,
          })
  
          state.final_score++
        }
  
        else {
          state.quiz_summary.push({
            id: question.id,
            question: question.question,
            user_selected_option_value: theQuestionAnswer.user_selected_option_value,
            question_correct_value: theQuestionAnswer.question_correct_value,
            is_user_option_correct: false,
          })
        }
      } else{
        state.quiz_summary.push({
          id: question.id,
          question: question.question,
          user_selected_option_value: "Not answered",
          question_correct_value: question.correct_option_value,
          is_user_option_correct: false,
        })      
      }


    })

  },

  SET_QUESTION_COUNTER(state, payload) {
    state.question_counter = payload
  },

  SET_CURRENT_QUESTION_NUMBER(state, payload){
    state.current_question_no = payload
  }
}