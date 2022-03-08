export const state = () => ({
  questions: [
    {
      id: 1,
      question: "Who created the HTML language?",
      options: [
        "A-Tim Bernerslee", "B-John Doe", "C-Tim Bernersly", "D-Chris Do"
      ],
      right_option_index: 0,
    },

    {
      id: 2,
      question: "In programming, what's the common practice sentence?",
      options: [
        "A-Good morning", "B-Hello World!", "C-How are you?", "D-What's up?"
      ],
      right_option_index: 1,
    },

    {
      id: 3,
      question: "Which of the following software supports team work?",
      options: [
        "A-Canva", "B-Adobe Photoshop", "C-Flash", "D-Figma"
      ],
      right_option_index: 3,
    },

    {
      id: 4,
      question: "In development, what sign represents the mathematical symbol for multiplication?",
      options: [
        "A-# (Hash symbol)", "B-* (Asterisk)", "C-& (And symbol)", "D-x (Letter x)"
      ],
      right_option_index: 1,
    },

    {
      id: 5,
      question: "Which of the following is a CSS framework?",
      options: [
        "A-QaudriCSS", "B-Javascript", "C-TailwindCSS", "D-styles.css"
      ],
      right_option_index: 2,
    },
    
  ],

  current_question: '',
  answered_questions: '',
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
  }
}