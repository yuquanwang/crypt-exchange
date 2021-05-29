<template>
  <div>
    <v-row>
      <v-col>
        <v-icon slot="icon" color="blue" size="24">
          mdi-bell-ring
        </v-icon>
          {{latestMsg.title}}
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <div class="text-center">
          <v-chip  color="green" class="ma-2" v-for="(asset,idx) in latestMsg.assets" v-text="asset">    
          </v-chip>
        </div>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  name: 'DynamicMessage',
  data() {
    return {
      latestMsg: {
        title:'List BNB on Aut 29',
        assets:['BNB','MDX']
      }
    }
  }
}
</script>
