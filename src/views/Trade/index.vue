<template>
  <!--
  1.价格信息；（展示最近1分钟，2分钟，3分钟，5分钟）
  2.消息展示；（关键消息线上、自动抽取币种标签展示、实现快速点击查价）
  3.买单，卖单；（市场价、市价1%，2%，3%，5%，自定义价买入、卖出）
  4.快捷挂单；（市价、市价1%，2%，3%，5%，自定义价买入）
  -->
  <div>
    <v-row class="trade-component">
      <v-col cols="22">
        <trend-view />
      </v-col>
      <v-col cols="2"> </v-col>
    </v-row>
    <v-divider/>
    <v-row class="trade-component">
      <v-col>
        <dynamic-message @selectAsset="assetSelected"/>
      </v-col>
    </v-row>
    <v-divider />
    <v-row class="trade-component">
      <v-col>
        <place-order :baseAsset="msgAsset"/>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import TrendView from './components/TrendView.vue'
import DynamicMessage from './components/DynamicMessage.vue'
import PlaceOrder from './components/PlaceOrder.vue'
export default {
  name: 'TradeView',
  components: {
    TrendView,
    DynamicMessage,
    PlaceOrder
  },
  data () {
    return {
      msgAsset:''
    }
  },
  methods: {
    assetSelected(asset){
      this.msgAsset = asset
    }
  }
}
</script>
<style>
.trade-component.row{
 margin: 5px 10px;
}
.trade-row .col {
  padding: 3px;
}
.sub-text {
  padding-left: 20px;
  color: grey;
  font-size: 6px;
}
.sub-title {
  padding-left: 20px;
  color: grey;
}
</style>
