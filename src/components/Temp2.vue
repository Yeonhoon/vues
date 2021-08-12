<template>
    <v-container>
        <v-layout column>
            <v-flex>
                <h1>임시 아이디: {{tempId}}</h1>
                <v-btn @click="edit()">수정</v-btn>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
export default {
    props:['temp2'],
    computed:{
        tempId(){
            return this.$route.params.id
        }
    },
    methods:{
        edit(){
            this.$router.push({
                name: 'tempEdit',
                params:{
                }
            })
        }
    }

}
</script>