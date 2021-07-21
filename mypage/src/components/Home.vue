<template>
    <div>
        <h1>{{title}}</h1>
        <v-p info >{{count}}</v-p>
        <v-btn info @click="count++">추가</v-btn>
        <div>
            <p>이름: {{names}}</p>
            <p>시간: {{ getDateTime(createdAt)}}</p>
            <p>ㅎㅇ {{ helloMixin }}</p>
            <v-btn @click="changeName()">이름변경</v-btn>
            <Component1 
                :names = "names"
                :address = "address"
                :phone = "phone"
                :dogs = "dogs"
            >
            
            </Component1>
            <Component2
                :names = "names"
                :address = "address"
                :phone = "phone"
                :dogs = "dogs"
                @childData="parents"
            ></Component2>
                <!-- 자식컴포넌트로부터 childData를 받을때 -->
        </div>
    </div>
</template>
<script>

import {dateFormat} from '../mixins/dateFormat'
export default {
    data(){
        return {
            title: 'HomePage',
            count: 1,
            names: "장연훈",
            address:'서울시 관악구',
            phone: '01050127795',
            dogs: true,
            createdAt:null,
        }
    },
    created() {
        this.createdAt = new Date();
        console.log("mixinData: ", this.mixinData)
    },
    computed: {
        helloMixin(){
            return this.mixinData + "안녕!"
        }
    },
    // 
    methods: {
        changeName (){
        this.names = "장연훈이 아님"
        },
        parents(user){
            console.log("부모에서 데이터 받음!")
            this.names = user.names
            this.address = user.address
            this.phone = user.phone
            this.dogs = user.dogs
        },
       
       
    },
    mixins: [dateFormat]
}
</script>