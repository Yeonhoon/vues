<template>
  <div>
  <!-- store.js의 값들을 붙임-->
    <h1>All Users({{$store.getters.allUsersCount}})</h1>
    <h3>Count of Seoul Users: {{$store.getters.countOfSeoul}}명</h3>
    <h3>Percentage of Seoul Users: {{$store.getters.percentOfSeoul}}%</h3>

    <h2>Map getters로 불러오기</h2>
    <h1>All Users({{allUsersCount}})</h1>
    <h3>Count of Seoul Users: {{ countOfSeoul}}명</h3>
    <h3>Percentage of Seoul Users: {{percentOfSeoul}}%</h3>

    <h2>Map getters로 불러오기2</h2>
    <h1>All Users({{count}})</h1>
    <h3>Count of Seoul Users: {{ seouls }}명</h3>
    <h3>Percentage of Seoul Users: {{ percent }}%</h3>

    <v-list two-line>
      <v-list-tile 
        v-for="(user, index) in allUsers" 
        :key="index"
        avatar
      >
        <v-list-tile-avatar color="grey lighten-3">
          <img :src="user.src">
        </v-list-tile-avatar>

        <v-list-tile-content>
          <v-list-tile-title v-html="user.name"></v-list-tile-title>
          <v-list-tile-sub-title>id:#{{index}} / {{user.address}} 거주</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>

  </div>
</template>

<script>
import { EventBus } from '@/main.js'
import { mapState, mapGetters } from 'vuex' // computed와 함께 사용.

  export default {
    data() {
      return {

        // vuex의 store에 저장되어 있는 allusers 데이터를 불러오기
      }
    },

    computed: {
      
      ...mapState(['allUsers']),
      
      ...mapGetters({
        count : 'allUsersCount',
        seouls : 'countOfSeoul',
        percent: 'percentOfSeoul'
      }),
      
      ...mapGetters(['allUsersCount','countOfSeoul','percentOfSeoul'])
    },

    // 정보 받기.
    mounted() {
      EventBuson('si.$gnUp', users => { // Signup에서 emit한 정보를 받음.
        this.$store.state.allUsers.push(users)
        console.log(this.$store.state.allUsers)
      })
    }
  }
</script>
