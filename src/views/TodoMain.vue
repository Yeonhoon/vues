<template>
  <v-app>
    <v-container>
      <v-layout column>
        <v-flex xs12 md6>
          <Todo
            @addTodo = "addTodo"
            @edit = "edit"
          ></Todo>
        </v-flex>
        <hr>
        <v-flex class="ma-3 pa-3" xs12 md6>
          <center><h2>TodoList</h2>
            </center>
          <TodoList
          :todoList = "todoList"
          @deleteTodo = "deleteTodo"
          >

          </TodoList>

        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
  // import HelloWorld from '../components/HelloWorld'

  export default {
    name: 'Home',
    data(){
      return{
        todoList: [],
        todo: null
      }
    },
    methods:{
      addTodo(Todo){
        console.log('Todo를 받음')
        this.todoList.push({Todo: Todo, status: "created"})
        console.log(this.todoList)
      },
      deleteTodo(key){
        console.log('삭제할거다')
        this.todoList.splice(key,1)

      },
      edit(Todo, key){
        console.log('수정된걸 부모에서 받음')
        this.todoList[key].Todo = Todo
      }
    }
    // components: {
    //   HelloWorld,
    // },
  }
</script>
