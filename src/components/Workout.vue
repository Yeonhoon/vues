<template>
    <v-container>
        <v-layout column justify-center>
            <v-flex>
                <h2>유저를 검색해주세요</h2>
                <v-text-field
                    label="유저번호 입력"
                    v-model="userId"
                ></v-text-field>
                <!-- {path: `workout/${userId}`} -->
                <v-btn
                    @click="searchUser()" 
                >검색</v-btn>
            </v-flex> 
            <v-flex>
                <router-view></router-view>
            </v-flex>
        </v-layout>

    </v-container>
    
</template>
<script>
export default {
    data(){
        return {
            userId: null
        }
    },
    methods:{
        searchUser(){
            this.$router.push({
                name: 'user_id',
                params: {
                    id: this.userId
                    }
                })
            this.userId = null
        }
    }
}
</script>