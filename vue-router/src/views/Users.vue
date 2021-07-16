<template>
    <v-layout
        row wrap pt-5 text-xs-center
        style='max-width:500px;margin:0 auto;'>
        <v-flex xs12>
            <h1>Users</h1>
            <p>유저를 검색하시오</p>
        </v-flex>
        <v-flex xs12>
            <v-text-field
                v-model="userId"
                label="유저 번호를 입력하세요.">
            </v-text-field>
            <v-btn @click="$router.push({
                name: 'users-detail', 
                params:{
                id:userId
            } 
            })">검색</v-btn> 
            <!-- userId라는 파라미터와 함께 같이 이동함. -->
        </v-flex>
        <v-flex xs12 >
            <!-- 하위경로 세팅 -->
            <router-view></router-view>
        </v-flex>
    </v-layout>
</template>

<script>

export default {
    data(){
        return{
            userId: null
        }
    },
    // computed: {
    //     userId(){
    //         return this.$route.params.userId
    //     }
    // },
    // vue가 만들어질 때 실행될 동작.
    created(){
        console.log('created')
        console.log('router',this.$router) // $router: router.js에 선언되어있는 것
        console.log('router',this.$route) // $route: params, query, 현재 주소
        
    },
    beforeRouteEnter(to, from, next){
        console.log('before Enter')
        next()
        },
    // 페이지를 떠날 때
    beforeRouteLeave(to, from, next){
        console.log('before Leave')
        next()
    },
    created(){
        console.log("created")
        },
    destroyed(){
        console.log('destroyed')
    }
}
</script>

