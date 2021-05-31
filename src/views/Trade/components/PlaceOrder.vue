<!--
  3.买单，卖单；（市场价、市价1%，2%，3%，5%，自定义价买入、卖出）
  4.快捷挂单；（市价、市价1%，2%，3%，5%，自定义价买入）
-->
<template>
  <div class="trade-row">
    <v-container :loading="placeOrdering">
      <v-row>
        <v-col class="sub-title">
          <v-icon color="blue" size="24">
            mdi-book-edit-outline
          </v-icon>
          下单
        </v-col>
      </v-row>
      <v-form>
        <v-row>
          <v-col>
            <v-radio-group row v-model="orderForm.platform">
              <template v-slot:label>
                <div>平台</div>
              </template>
              <v-radio v-for="(platform, idx) in platforms" :key="platform.id" :label="platform.name" :value="platform.id">
                <template v-slot:label>
                  <div>
                    <v-avatar size="16">
                      <v-img :src="platform.icon"></v-img>
                    </v-avatar>
                    {{ platform.name }}
                  </div>
                </template>
              </v-radio>
            </v-radio-group>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="3" sm="3" md="3">
            <v-combobox
              v-model="orderForm.from"
              :items="assetsMeta"
              item-text="symbol"
              item-value="symbol"
              :return-object="false"
              label="出"
              :hint="hintFrom"
              persistent-hint
              small-chips
              @change="changeAsset(true)"
            >
              <template v-slot:item="{ item }">
                <v-chip color="green" text-color="white">
                  <v-avatar size="16">
                    <img :src="item.icon" :alt="item.symbol" />
                  </v-avatar>
                  {{ item.symbol }}
                </v-chip>
                <span class="sub-text" style="margin-left:20px" v-if="item.balance">{{ item.balance }}</span>
              </template>
            </v-combobox>
          </v-col>
          <v-col cols="3" sm="3" md="3">
            <v-row style="float:right">
              <v-item-group>
                <v-item v-for="(op, idx) in quickOps" :key="idx" v-slot="{ active, toggle }" @change="quickAmount(op.rate)">
                  <v-btn rounded x-small style="margin-right:10px;float: right;" :color="active ? 'orange' : 'green'" @click="toggle">
                    {{ op.name }}
                  </v-btn>
                </v-item>
              </v-item-group>
            </v-row>
            <v-text-field v-model="orderForm.amount" label="数量" :rules="rules.age" type="number"> </v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col md="3"  justify="center" align-self="center" style="text-align:right">
            <v-btn icon>
              <v-icon color="purple">
                mdi-swap-vertical-bold
              </v-icon>
            </v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="3" sm="3" md="3">
            <v-combobox v-model="orderForm.to" :items="assetsMeta" item-text="symbol" item-value="symbol" :return-object="false" label="入" persistent-hint small-chips @change="changeAsset(true)">
              <template v-slot:item="{ item }">
                <v-chip color="green" text-color="white">
                  <v-avatar size="16">
                    <img :src="item.icon" :alt="item.symbol" />
                  </v-avatar>
                  {{ item.symbol }}
                </v-chip>
                <span class="sub-text" style="margin-left:20px" v-if="item.balance">{{ item.balance }}</span>
              </template>
            </v-combobox>
          </v-col>
          <v-col cols="3" sm="3" md="3">
            <v-text-field v-model="orderForm.quote" readonly label="预估数量" :rules="rules.age" type="number"> </v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col md="3"   justify="center" align-self="center" style="text-align:right">
            <v-btn class="mx-2" fab small color="green" :loading="placeOrdering" @click="handlePlaceOrder">
              <v-avatar>Swap</v-avatar>
            </v-btn>
          </v-col>
        </v-row>
         
      </v-form>
    </v-container>
  </div>
</template>
<script>
import { placeOrder } from '@/api/trade/trade-api'
import { platformsMeta, assetsMeta } from '@/utils/metadatas.js'

export default {
  name: 'PlaceOrder',
  props:{
    baseAsset:{type:String,default:''}
  },
  watch:{
    baseAsset(newValue){
      this.baseAssetChange(newValue)
    }
  },
  data() {
    return {
      platforms: platformsMeta,
      assetsMeta: [],
      orderForm: {
        platform: 270,
        from: '',
        to: 'BNB',
        type: 'sell',
        amount: 0,
        quote: 1
      },
      rules: {
        age: []
      },
      assetsLoading: false,
      quickOps: [
        { name: '30%', rate: 0.3 },
        { name: '50%', rate: 0.5 },
        { name: '80%', rate: 0.8 },
        { name: 'max', rate: 1 }
      ],
      assetBalances: [],
      hintFrom: '',
      selectedRate: 0,
      placeOrdering:false
    }
  },
  created() {
    this.loadAssetBalances()
    this.sortAssetMetas()
  },
  methods: {
    handlePlaceOrder() {
      this.placeOrdering = true
      placeOrder(this.orderForm).then((resp) => {
        console.log(resp)
      }).finally(()=>this.placeOrdering = false)
    },
    baseAssetChange(baseAsset){
      this.orderForm.from = baseAsset
      this.changeAsset(true)
    },
    changeAsset(isFrom) {
      const balance = this.getAvailable(this.orderForm.from)
      this.hintFrom = '最大可用：' + balance
      if (this.selectedRate > -1) {
        this.orderForm.amount = this.getAvailable(this.orderForm.from) * this.selectedRate
      }
    },
    loadAssetBalances() {
      if (this.assetBalances.length > 0) return
      this.assetBalances = [
        { symbol: 'BTC', balance: '0.5' },
        { symbol: 'ETH', balance: '0.2323' },
        { symbol: 'SHIB', balance: '118319098189.2323' },
        { symbol: 'BNB', balance: '23.34' }
      ]
    },
    getAvailable(symbol) {
      for (const me of this.assetsMeta) {
        if (symbol == me.symbol) {
          return me.balance
        }
      }
      return 0
    },
    quickAmount(rate) {
      if (this.selectedRate === rate) {
        this.selectedRate = 0
      } else {
        this.selectedRate = rate
      }
      if (!this.orderForm.from) {
        this.orderForm.amount = 0
      } else {
        this.orderForm.amount = this.getAvailable(this.orderForm.from) * this.selectedRate
      }
    },
    sortAssetMetas() {
      const metas = Object.assign([], assetsMeta)
      const sortedAssets = metas.map((item) => {
        item.balance = this.getBalance(item.symbol)
        return item
      })
      sortedAssets.sort((a, b) => b.balance - a.balance)
      this.assetsMeta = sortedAssets
    },
    getBalance(symbol) {
      for (const assetItem of this.assetBalances) {
        if (assetItem.symbol === symbol) {
          return assetItem.balance
        }
      }
      return 0
    }
  }
}
</script>
