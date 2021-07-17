import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 저장소
export default new Vuex.Store({
  state: {
    // 상태: vue 인스턴스의 data역할을 수행
    allUsers:[
      {userId: 'hoza123', password: '123', name: 'Hoza', address: 'Seoul', src:'https://goo.gl/oqLfJR'},
      {userId: 'max123', password: '456', name: 'Max', address: 'Berlin', src:'https://goo.gl/Ksk9B9'},
      {userId: 'lego123', password: '789', name: 'Lego', address: 'Busan', src:'https://goo.gl/x7SpCD'}
    ]
  },
  getters:{ // vue instance의 computed 역할
    
    // 불러와서 쓸 값을 선언해줘야 함(state).
    allUsersCount: (state) => {
      return state.allUsers.length

    },
    countOfSeoul: state => {
      let count = 0
      state.allUsers.forEach(user => { //user: allUsers의 값들
        if(user.address === 'Seoul') count ++
      })
      return count
    },
    percentOfSeoul: (state, getters) => {
      return Math.round(getters.countOfSeoul / getters.allUsersCount * 100)
    }
  },
  mutations: {
    // state 값을 변화시키므로  state 값을 받아오자.
    // payload: Signup.vue의 addUsers 값을 받음.
    addUsers: (state, payload) => {
      state.allUsers.push(payload)
    }
  },
  
  actions: {
    // addUsers를 commit하는 action 만들기
    addUsers: ({ commit }, payload) => {
      // context: commit을 간단히 써주기 위한 객체 형태
      commit('addUsers',payload)
    }
  }
})
