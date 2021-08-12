import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import Todo from './components/Todo'
import TodoList from './components/TodoList'
import store from './store'
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

export const EventBus = new Vue()

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
