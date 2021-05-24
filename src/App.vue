<template>
  <div id="app">
    <v-app >
      <v-app-bar>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
          <router-link to="/profile">
            <v-icon>mdi-account-details</v-icon>
          </router-link>
      </v-app-bar>
      <v-main >
        <router-view />
      </v-main>
    </v-app>
  </div>
</template>
<script>
export default ({
  name: 'Index'
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
