<template>
    <div>
        <h1>회원 목록</h1>
        <h1>Users: {{count}}명</h1>
        <h4>서울 거주 회원: {{seouls}}명 ({{percent}}%)</h4>
        <v-list two-line>
            <v-list-item
            v-for="(user,idx) in users"
            :key="idx"
            >
            <v-list-item-content>
                <v-list-item-title v-html="user.name"></v-list-item-title>
                id:#{{idx}} / {{user.address}} 거주
            </v-list-item-content>
            </v-list-item>
        </v-list>
    </div>
</template>
<script>
import {EventBus} from '@/main.js'
import {mapGetters, mapState} from 'vuex'
export default {
    data(){
        return {
        }
    },
    // mapgetters: getters 간단히 사용하기
    computed:{
        ...mapGetters({
            count: 'allUsersCount',
            seouls: 'countSeoul',
            percent: 'percentOfSeoul'
        }),
        ... mapState({
                users: 'allUsers'
        })
        // ...mapGetters(['allUsersCount','countSeoul','percentOfSeoul'])
    },
    mounted(){
        EventBus.$on('signup', users => {
            // allUsers에 users를 넣어라
            this.$store.state.allUsers.push(users)
        })
    }
}
</script>