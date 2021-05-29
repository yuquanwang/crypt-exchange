<template>
  <div>
  <v-list>
    <v-subheader>Recent orders</v-subheader>
    <v-list-item v-for="(order, idx) in orders" :key="order.id" style="padding:0px 5px">
      <v-list-item-icon style="margin-right:5px">
        <v-icon :color="order.type==='buy'?'green':'orange'">{{order.type==='buy'?'mdi-arrow-bottom-left-thick':'mdi-arrow-top-right-thick'}}</v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-row>
          <v-col cols="2" class="order-time">
            {{order.createTime|timeAgo}}
          </v-col>
          <v-col>
            <v-avatar size="16">
              <v-img :src="getPlatform(order.platform).icon"></v-img>
            </v-avatar>
            <span class="order-asset">
            {{order.amount}} {{order.from}} -> {{order.quote}} {{order.to}}
            </span>
          </v-col>
        </v-row>
        <!--
        <v-list-item-title style="text-align:center">
          <v-avatar size="16">
            <v-img :src="getPlatform(order.platform).icon"></v-img>
          </v-avatar>
          {{order.from}} -> {{order.to}}
        </v-list-item-title>
        <v-list-item-subtitle style="text-align:center">{{order.amount}} -> {{order.quote}}</v-list-item-subtitle>
        -->
      </v-list-item-content>
      <v-list-item-action style="margin-left:5px">
        <v-btn icon :color="order.status===1?'green':'yellow'">
          <v-icon>mdi-information-outline</v-icon>
        </v-btn>
      </v-list-item-action>
    </v-list-item>
  </v-list>
  <v-row>
    <v-col style="text-align:center">
      <v-btn text :loading="loadingMore" @click="handleLoadingNext">
        <v-icon color="grey">mdi-dots-horizontal</v-icon>
      </v-btn>
    </v-col>
  </v-row>
  </div>
</template>
<!-- 下单信息 -->
<script>
export default {
  name: 'Orders',
  data () {
    return {
      loadingMore: false,
      platforms:[
        {id:270,name:"Binance",icon: 'https://s2.coinmarketcap.com/static/img/exchanges/64x64/270.png'},
        {id:102,name:"Huobi global",icon: 'https://s2.coinmarketcap.com/static/img/exchanges/64x64/102.png'},
        {id:302,name:"Gate.io",icon: 'https://s2.coinmarketcap.com/static/img/exchanges/64x64/302.png'}
      ],
       orders: [
        {
          id: '12',
          platform: 270,
          from:'BTC',
          to:'BNB',
          type:'sell',
          amount: 200,
          quote:103023,
          finalQuote:103022.8721,
          status: 1,
          createTime:1622301551701
        },
        {
          id: '13',
          platform: 270,
          from:'USDT',
          to:'BNB',
          type:'sell',
          amount: '300',
          quote:0.98,
          finalQuote:0.98012,
          status: 1,
          createTime:1621437551000
        },
        {
          id: '14',
          platform: 102,
          from:'USDT',
          to:'ETH',
          type:'buy',
          amount: '300',
          quote:0.0823,
          finalQuote:0.0822,
          status: 2,
          createTime:1620919151000
        },
        {
          id: '15',
          platform: 302,
          from:'SHIB',
          to:'USDT',
          type:'sell',
          amount: '1298312304.21283',
          quote:334.1,
          finalQuote:333.23,
          status: 2,
          createTime:1612970351000
        }
      ]
    }
  },
  methods: {
    getPlatform(id){
      for (const platform of this.platforms) {
        if(platform.id === id){
          return platform
        }
      }
      return {}
    },
    handleLoadingNext(){
      const that = this
      this.loadingMore = true
      setTimeout(()=>that.loadingMore =false, 2000)
    }
  }
}
</script>
<style scoped>
.order-time{
  font-size: 5px;
  color: gray;
  text-align: center;
}
.order-asset{
  font-size: 14px;
}
</style>