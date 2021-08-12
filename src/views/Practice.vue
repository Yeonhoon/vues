<template>
    <v-container>
        <v-layout>
            <v-flex>
                <Join></Join>
            </v-flex>
            <v-flex>
                <Members></Members>  
            </v-flex>
        </v-layout>
    </v-container>    
</template>re
<script>
import Join from '@/components/PracticeVuex/Join.vue'
import Members from '@/components/PracticeVuex/Members.vue'
export default {
    components:{
            Join,
            Members
        }
    }
</script>