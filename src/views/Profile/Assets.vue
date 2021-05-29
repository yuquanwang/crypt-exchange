<template>
    <v-container fluid>
       <v-row justify="space-around">
         <v-chip v-for="asset in assets" size="32" :key="asset.symbol" :title="asset.symbol" color="green" text-color="white" style="margin-top:5px">
          <v-avatar>
            <img
              :src="icons[asset.symbol]"
              :alt="asset.symbol" width="32" height="32"
            >
          </v-avatar>
          {{asset.amount}}
         </v-chip>
       </v-row> 
    </v-container>
</template>
<!-- 用户资产信息 -->
<script>
const assetIcons={
  BTC:'https://s2.coinmarketcap.com/static/img/coins/64x64/1.png',
  ETH:'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png',
  BNB:'https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png',
  SHIB:'https://s2.coinmarketcap.com/static/img/coins/64x64/2.png',
}
export default {
  name: 'Assets',
  data () {
    return {
      icons:assetIcons,
      assets:[
        {symbol:'BTC',amount:'0.5'},
        {symbol:'ETH',amount:'0.2323'},
        {symbol:'SHIB',amount:'0.2323'},
        {symbol:'BNB',amount:'123298328201'}
      ]
    }
  },
  methods:{
    
  }
}
</script>