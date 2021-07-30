<template>
  <v-app>
    <v-card
      class="ma-3 pa-3 justify-center"
      v-for="(list, key) in todoList"
      :key="key"
    >
      <p>{{list.Todo}}</p>
      <p>{{list.status}}</p>
      <v-btn fab text small color="green"
      v-if="list.status ==='created'">
        <v-icon color="green">mdi-check</v-icon>
      </v-btn>
      <v-btn fab text small color="red"
      v-if="list.status==='created'"
      @click="deleteTodo(key)">
        <v-icon color="red">mdi-delete</v-icon>
      </v-btn>
      <v-btn fab text small color="yellow"
      v-if="list.status==='created'"
      @click="editTodo(list.Todo, key)">
        <v-icon color="yellow">mdi-clipboard</v-icon>
      </v-btn>
    </v-card>

  </v-app>
</template>
<script>
import {eventBus} from '../main'
export default {
  props: ["todoList"],
  name:'',
  data() {
    return {
      lists: {},
      // Todo: null,
      // status: null
    };
  }, 
  beforeCreate() {},
  created() {
    this.lists.Todo = this.Todo
    this.lists.status = this.status
  }, 
  // beforeMount() {},
  // mounted() {}, 
  // beforeUpdate() {}, 
  // updated() {}, 
  // beforeUnmount(){}, 
  // unmounted(){},
  methods:{
    editTodo(Todo, key){
      console.log('수정하겠다.')
      eventBus.editTodo(Todo, key)
    },
    deleteTodo(key){
      console.log("삭제한다.")
      console.log(key,"를 삭제한다")
      this.$emit("deleteTodo", key)
    }
  }
}
</script>