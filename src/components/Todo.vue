<template>
    
  <v-container>
      <v-layout column justify-center>
        <v-img
        :src="require('../assets/logo.svg')"
        class="my-3"
        contain
        height="200"
        />
        <v-row 
            class="d-flex justify-center ml-15 mr-15 mt-5">

            <v-text-field
                label="Todo"
                outlined
                v-model="Todo">
        </v-text-field> 
        </v-row>
        <v-flex>
            <div class="text-center">
                <v-btn class="ma-3 primary" @click="addTodo()">할일 추가</v-btn>
                <v-btn class="warning"
                v-if="this.status ==='editing'"
                @click="edit()">할일 수정</v-btn>
            </div>
        </v-flex>
      </v-layout>

  </v-container>

</template>
<script>
import {eventBus} from '../main'
export default {
    name:'',
    components:{},
    data() {
        return {
            Todo: null,
            key: null,
            status : null
        };
    }, 
    beforeCreate() {},
    created() {
        eventBus.$on('editTodo',(Todo, key)=>{
            this.Todo = Todo
            this.key = key
            this.status = "editing"
            console.log(Todo, key, status)

        })
    }, 
    beforeMount() {},
    mounted() {
        
    }, 
    methods:{
        addTodo(){
            if(this.Todo === null){
                alert('할일을 입력해라!')
            }
            else{
                console.log('Todo를 부모에게 보냄')
                this.$emit('addTodo',this.Todo)  
                this.Todo = null
            }
        },
        edit(){
           if(this.Todo === null){
                alert('할일을 입력해라!')
            }
            else{
                console.log('수정된 Todo를 부모에게 보냄')
                this.$emit('edit',this.Todo, this.key)  
                this.Todo = null
                this.status = 'edited'
            }
        }
    }
}
</script>