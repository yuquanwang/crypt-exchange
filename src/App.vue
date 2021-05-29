<template>
  <v-app>
    <left-bar />
    <v-main app>
      <main-content />
    </v-main>
  </v-app>
</template>
<script>
import LeftBar from './views/Layouts/LeftBar.vue'
import MainContent from "./views/Layouts/Main.vue";
export default {
  name: 'Index',
  components: { LeftBar ,MainContent}
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
