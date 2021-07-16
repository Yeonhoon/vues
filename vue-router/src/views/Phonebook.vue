<template>
    <div>
        <p>user ID: {{userId}}</p>
        <!-- App.vue의 parameter와 router로 받기 -->
        <p>이름: {{$route.params.name}}</p>
        <p>query name: {{$route.query.name}}</p>
        <p>category: {{$route.query.category}}</p>
    </div>
</template>
<script>
export default {
    // 이 vue 안에서 아이디 보내기
    computed:{
        userId(){
                return this.$route.params.userId
        }

    }
}
</script>