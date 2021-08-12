import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        // vue instance의 data
        allUsers:[
            {userId: 'jyh',password:'123', name:'jyh',address:'Seoul'},
            {userId: 'hml',password:'123', name:'hml',address:'Seoul'},
            {userId: 'dan',password:'123', name:'dan',address:'Seoul'},
            {userId: 'degrom',password:'123', name:'degrom',address:'NY '},
        ]
    },
    getters:{
        allUsersCount: state => {
            return state.allUsers.length
        },
        countSeoul: state => {
            let count = 0
            //forEach: 앞의 요소를 돌면서 한번씩 실행함
            state.allUsers.forEach(user => {
                if(user.address === 'Seoul') count ++
            })
            return count
        },
        percentOfSeoul : (store, getters) =>{
            // getters 자체가 state를 받기 때문에 state를 꼭 써줘야 함.
            var x = Math.round(getters.countSeoul / getters.allUsersCount * 100)
            return x
        }
        
    },
    mutations:{

    },
    actions:{

    }
})