<template>
  <v-list>
    <v-list-item v-for="appKey in appKeys" :key="appKey.id" style="padding:0px 2px">
      <v-list-item-avatar :title="appKey.platform" size="32">
        <v-img :src="appKey.icon"></v-img>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title v-text="appKey.appkey"></v-list-item-title>
        <v-list-item-subtitle v-text="appKey.appSecurity"></v-list-item-subtitle>
      </v-list-item-content>
      <v-list-item-action>
        <v-btn icon x-small>
          <v-icon>mdi-format-list-bulleted-square</v-icon>
        </v-btn>
      </v-list-item-action>
    </v-list-item>
  </v-list>
</template>
<!-- 用户appkey信息设置 -->
<script>
export default {
  name: 'AppKeySetting',
  data() {
    return {
      appKeys: [
        {
          id: '12',
          platform: 'Binance',
          icon: 'https://s2.coinmarketcap.com/static/img/exchanges/64x64/270.png',
          href: 'https://www.binance.com',
          appkey: '23f90jdo***shuwq398vbd',
          appSecurity: 'landksa***e2io3val'
        },
        {
          id: '13',
          platform: 'Huobi Global',
          icon: 'https://s2.coinmarketcap.com/static/img/exchanges/64x64/102.png',
          href: 'https://www.huobi.com',
          appkey: '23f90jdo***shuwq398vbd',
          appSecurity: 'landksa***e2io3val'
        }
      ]
    }
  }
}
</script>
