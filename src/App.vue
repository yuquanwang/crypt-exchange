<template>
  <v-app>
    <header-user />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>
<script>
import HeaderUser from './views/Layouts/HeaderUser.vue'
export default {
  components: { HeaderUser },
  name: 'Index'
}
</script>

<style>
a {
  text-decoration: none;
}

.router-link-active {
  text-decoration: none;
}
</style>
