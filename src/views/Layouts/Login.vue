<template>
  <v-dialog v-model="visible">
    <v-card>
      <v-card-title>
        <span class="text-h5">User Profile</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field label="Identity*" required v-model="identity"></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field label="Password*" type="password" required v-model="password"></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="login">
          Login
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
import { login } from "../../api/account/session"
export default {
  name:'LoginDialog',
  data () {
    return {
      identity:'',
      password:'',
    }
  },
  methods: {
    login(){
      login(this.identity,this.password).then(resp=>{
        this.$store.commit('setToken', resp.data)
        this.$store.commit('setToken', resp.data)
      })
    }
  }

}
</script>