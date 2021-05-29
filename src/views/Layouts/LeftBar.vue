<template>
  <v-navigation-drawer v-model="drawer" :mini-variant.sync="mini" permanent width="400" app>
    <v-list-item class="px-2">
      <v-list-item-avatar medium>
        <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
      </v-list-item-avatar>
      <v-list-item-title>John Leider</v-list-item-title>
      <v-btn icon @click.stop="mini = !mini">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
    </v-list-item>
    <user-profile :open="!mini"/>
  </v-navigation-drawer>
</template>
<script>
import UserProfile from '../Profile/index.vue'
export default {
  name: 'HeaderBar',
  components: {
    UserProfile
  },
  data() {
    return {
      drawer: true,
      mini: false
    }
  }
}
</script>
