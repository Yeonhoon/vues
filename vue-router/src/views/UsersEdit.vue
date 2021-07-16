<template>
    <div>
        <h1>User edit</h1>
        <p>{{userId}}</p>
    </div>

</template>
<script>
export default {
    computed:{
        userId(){
            return this.$route.params.id
        }
    },
}
</script>