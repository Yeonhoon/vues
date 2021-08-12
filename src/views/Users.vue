<template>
    <v-container grid-list-xl>
        <v-layout row wrap>
            <v-flex xs6>
                <Signup></Signup>
            </v-flex>
            <v-flex xs6> 
                <AllUsers></AllUsers>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>

import Signup from '@/components/Users/Signup'
import AllUsers from '@/components/Users/AllUsers'
export default {
    components:{
        Signup,
        AllUsers
    }
}
</script>