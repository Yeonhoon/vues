<template>
  <div>
      <h1>{{title}}</h1>
      <p>이름: {{names}}</p>
      <p>주소: {{address}}</p>
      <p>번호: {{phone}}</p>
      <p>반려견: {{DogsKr}}</p>
      <p>수정일자: {{getDateTime(editedDate)}}</p>
      <!-- <v-btn @click="changeName()">이름 변경2</v-btn> -->
  </div>

</template>
<script>
import {eventBus} from "../main"
import {dateFormat} from '../mixins/dateFormat'
export default {
    props: ['names','address', 'phone', 'dogs'],
    data () {
        return{
            title: "자식 컴포넌트1",
            editedDate: null
        }
    },
    computed : {
        // 한글로 바꿔줌.
        DogsKr(){
            return this.dogs == true ? '있음':'없음'
        }
    },
    methods: {
        changeName(){
            this.nameFromHome = "ㅎㅇㅎㅇ"
        },

        
    },
    mixins: [dateFormat],
    created(){
        // 신호듣고 있기
        eventBus.$on('userWasEdited', (date) => {
            this.editedDate = date
        })
    }
}
</script>