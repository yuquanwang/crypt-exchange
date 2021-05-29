<!--
  3.买单，卖单；（市场价、市价1%，2%，3%，5%，自定义价买入、卖出）
  4.快捷挂单；（市价、市价1%，2%，3%，5%，自定义价买入）
-->
<template>
  
</template>
<script>
import { placeOrder } from '@/api/trade/trade-api'
export default{
  name:'PlaceOrder',
  methods: {
    placeOrder(){
      placeOrder().then(resp=>{
        console.log(resp)
      })
    }
  }
}
</script>
