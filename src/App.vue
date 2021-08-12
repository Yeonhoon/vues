<template>
  <v-app>


    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>
      <v-btn
        @click="$router.push({name:'Home'})"
        text
      >
      Home
      </v-btn>
      <router-link router :to="{name:'About'}" exact
        >
        <h2>About</h2>
      </router-link>
        
      
      <v-btn
        href="/todo"
        text="Todo"
      >
      Todo
      </v-btn>
      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <div class="text-center">
        <h1>router 연습</h1>
        <router-link
          router :to="{name:'Home'}">
          <h2>Home</h2>
        </router-link>
        <router-link 
          router :to="{name:'About'}">
          <h2>About</h2>
        </router-link>
        <router-link
          router :to="{name:'Todo'}">
          <h2>Todo List</h2>  
        </router-link>
        <router-link
          router :to="{
            name:'Workout',
            }"
        > 
        <h2>Workout</h2>
        </router-link>
        <router-link
          router :to="{
            name:'Temp',
          }"
        >
        <h2>Temp</h2>
        </router-link>
        <router-link
          router :to="{
            name: 'Users'
          }">
          <h2>Users</h2>
        </router-link>
      </div>
      
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
