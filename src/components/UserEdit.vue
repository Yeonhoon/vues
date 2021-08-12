<template>
    <div>
        <h2>수정 페이지</h2>
    </div>
</template>
<script>
export default {
    computed:{
        userId(){
            return this.$route.params.id
        }
    }
}
</script>