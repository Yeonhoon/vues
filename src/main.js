import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import Todo from './components/Todo'
import TodoList from './components/TodoList'

Vue.config.productionTip = false
Vue.component("Todo",Todo)
Vue.component("TodoList",TodoList)

export const eventBus = new Vue({
  methods:{
    editTodo(todo, key){
      this.$emit('editTodo',todo, key)
    }
  }
})



new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
