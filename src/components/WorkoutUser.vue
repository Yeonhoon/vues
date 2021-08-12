<template>
    <div>
        <h1>User Detail</h1>
        <h2>User Id: {{userId}}</h2>
        <v-btn @click="edit()" small>수정</v-btn>
    </div>
</template>
<script>
export default {
    computed:{
        userId(){
            return this.$route.params.id
        }
    },
    methods:{
        edit(){
            // this.$router.push({name:'user-edit'})
            this.$router.push({path: `${this.userId}/edit`})
        }
    }
}
</script>