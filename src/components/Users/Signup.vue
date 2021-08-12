<template>
    <v-container>
        <v-layout columns>
            <v-flex>
                <v-form>
                    <h1>SignUp</h1>
                    <v-text-field placeholder="ID" v-model="id"></v-text-field>
                    <v-text-field placeholder="PW" v-model="pw"></v-text-field>
                    <v-text-field placeholder="NAME" v-model="name"></v-text-field>
                    <v-text-field placeholder="ADDRESS" v-model="address"></v-text-field>
                    <v-btn class="primary" @click="signup()">SignUP</v-btn>
                </v-form>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import {EventBus} from '@/main.js'
export default {
    data(){
        return{
            id: null,
            pw: null,
            name: null,
            address: null
        }
    },
    methods:{
        signup(){
            let userObj = {
                id: this.id,
                pw: this.pw,
                name: this.name,
                address: this.address
            }
            if(userObj.id === null | 
            userObj.pw === null | 
            userObj.name === null |
            userObj.address === null){alert('모두 입력하시오!')}
            EventBus.$emit('signup',userObj)
            console.log(userObj)
            this.clearForm()
        },
        clearForm(){
            this.id= null,
            this.pw = null,
            this.name = null,
            this.address = null
        }
    }
}
</script>