<template>
    <v-container>
        <v-layout column>
            <v-flex >
                <div class="text-center">
                    <h1>temp</h1>
                    <v-text-field
                        label="입력하시오"
                        v-model="temp2"
                    ></v-text-field>
                    <v-btn @click="call()">
                        입력</v-btn>
                </div>

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
        return{
            temp2: null
        }
    },
    methods:{
        call(){
            this.$router.push({
                name: 'temp2',
                params: {
                    id: this.temp2
                }
            })
            this.temp2 = null
        }
    }
}
</script>