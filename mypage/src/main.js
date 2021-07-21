import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import Compo1 from './components/compo1'
import Compo2 from './components/compo2'
Vue.config.productionTip = false

Vue.component('Component1', Compo1)
Vue.component('Component2', Compo2)

// eventBus: 자식 컴포넌트간의 통신

export const eventBus = new Vue({
  methods:{
    userWasEdited(date){
      this.$emit('userWasEdited',date)
    }
  }
})

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
