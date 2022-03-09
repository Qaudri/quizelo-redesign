export const state = () => ({
  questions: [
    {
      id: 1,
      question: "Who created the HTML language?",

      options: [
        {
          option_tag: "A",
          option_text: "Tim Bernerslee",
          selected: false
        },

        {
          option_tag: "B",
          option_text: "John Doe",
          selected: false
        },

        {
          option_tag: "C",
          option_text: "Tim Bernersly",
          selected: false
        },

        {
          option_tag: "D",
          option_text: "Chris Do",
          selected: false
        },
      ],

      correct_option_index: 0,
    },

    {
      id: 2,
      question: "In programming, what's the common practice sentence?",
      options: [
        {
          option_tag: "A",
          option_text: "Good morning",
          selected: false
        },

        {
          option_tag: "B",
          option_text: "Hello World!",
          selected: false
        },

        {
          option_tag: "C",
          option_text: "How are you?",
          selected: false
        },

        {
          option_tag: "D",
          option_text: "What's up?",
          selected: false
        },
      ],
      correct_option_index: 1,
    },

    {
      id: 3,
      question: "Which of the following software supports team work?",
      options: [
        {
          option_tag: "A",
          option_text: "Canva",
          selected: false
        },

        {
          option_tag: "B",
          option_text: "Adobe Photoshop",
          selected: false
        },

        {
          option_tag: "C",
          option_text: "Flash",
          selected: false
        },

        {
          option_tag: "D",
          option_text: "Figma",
          selected: false
        },
      ],
      correct_option_index: 3,  
    },

    {
      id: 4,
      question: "In development, what sign represents the mathematical symbol for multiplication?",
      options: [
        {
          option_tag: "A",
          option_text: "# (Hash symbol)",
          selected: false
        },

        {
          option_tag: "B",
          option_text: "* (Asterisk)",
          selected: false
        },

        {
          option_tag: "C",
          option_text: "& (And symbol)",
          selected: false
        },

        {
          option_tag: "D",
          option_text: "x (Letter x)",
          selected: false
        },
      ],
      correct_option_index: 1,  
    },

    {
      id: 5,
      question: "Which of the following is a CSS framework?",
      options: [
        {
          option_tag: "A",
          option_text: "QaudriCSS",
          selected: false
        },

        {
          option_tag: "B",
          option_text: "Javascript",
          selected: false
        },

        {
          option_tag: "C",
          option_text: "TailwindCSS",
          selected: false
        },

        {
          option_tag: "D",
          option_text: "styles.css",
          selected: false
        },
      ],
      correct_option_index: 2,  
    },
    
  ],

  current_question: '',
  answered_questions: [],
  question_counter: 0
})

export const getters = {
  getQuizQuestion(state) {
    return state.current_question
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
    }
  },

  retrievePreviousQuestion(context){
    if (context.state.question_counter === 0) {
      
    }

    else{
      context.commit("DECREASE_QUESTION_COUNTER");
      context.commit ("SET_CURRENT_QUESTION", context.state.questions[context.state.question_counter])
    }
  },

  chooseOption(context, data){
    console.log(data)

    context.commit("ADD_TO_ANSWERED_QUESTIONS", data)
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
    state.answered_questions.push({
      question_id: payload.question.id,
      question_correct_answer_index: payload.question.correct_option_index,
      user_selected_option_index: payload.selected_answer
    })
  }
}