<template>
    <div>
        <h2>수정하기</h2>
        <v-text-field label="Name" v-model="user.names"></v-text-field>
        <v-text-field label="Address" v-model="user.address"></v-text-field>
        <v-text-field label="Phone" v-model="user.phone"></v-text-field>
        <v-radio-group v-model="user.dogs">
            <v-radio
                label = "반려견 있음"
                :value= 'true'
            ></v-radio>
            <v-radio
                label = "반려견 없음"
                :value=  "false"
            ></v-radio>
        </v-radio-group>
            <v-btn @click="changeUser()">수정완료</v-btn>
    </div>
</template>
<script>
import {eventBus} from "../main"
export default {
    props: ['names','address', 'phone', 'dogs'],
    data(){
        return {
            user: {}
        }
    },
    created() {
        this.user.names = this.names
        this.user.address = this.address
        this.user.phone = this.phone 
        this.user.dogs = this.dogs
        console.log(this.user)
    },
    methods:{
        changeUser(){
            this.$emit("childData",this.user)
            // 이벤 트 버스 보내기
            // eventBus.$emit("userWasEdited", new Date())
            eventBus.userWasEdited(new Date())
        }
    }
}
</script>