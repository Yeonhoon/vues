<template>
  <v-container grid-list-xl>
    <v-layout row wrap>
      <v-flex xs6>
        <AllUsers></AllUsers>
      </v-flex>
      <v-flex xs6>
        <SignUp></SignUp>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import AllUsers from '@/components/Users/AllUsers' //@: src 절대경로
  import SignUp from '@/components/Users/SignUp'

  export default {
    components: {
      AllUsers,
      SignUp
    },
  }

</script>