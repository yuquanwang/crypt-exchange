<template>
    <v-container fluid>
       <v-row justify="space-around">
         <v-chip v-for="asset in assets" size="32" :key="asset.symbol" :title="asset.symbol" color="green" text-color="white" style="margin-top:5px">
          <v-avatar>
            <img
              :src="getAssetMeta(asset.symbol).icon"
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
import { assetsMeta } from "@/utils/metadatas.js";
export default {
  name: 'Assets',
  data () {
    return {
      assetMeta:assetsMeta,
      assets:[
        {symbol:'BTC',amount:'0.5'},
        {symbol:'ETH',amount:'0.2323'},
        {symbol:'SHIB',amount:'0.2323'},
        {symbol:'BNB',amount:'123298328201'}
      ]
    }
  },
  methods:{
    getAssetMeta(symbol){
      for (const asset of this.assetMeta) {
        if(asset.name ===symbol){
          return asset
        }
      }
      return {}
    }
  }
}
</script>