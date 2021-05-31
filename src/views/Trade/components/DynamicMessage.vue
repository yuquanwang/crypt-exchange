<template>
  <div class="trade-row">
    <v-row>
      <v-col class="sub-title">新消息</v-col>
    </v-row>
    <v-row>
      <v-col cols="24">
        <v-icon slot="icon" color="blue" size="24">
          mdi-bell-ring
        </v-icon>
        {{ latestMsg.title }}<span class="sub-text">{{ latestTimeStr }}</span>
      </v-col>
    </v-row>
    <v-row v-if="hasAsset">
      <v-col>
        <div class="text-left">
          <v-chip v-for="(asset, idx) in latestMsg.assets" :key="asset"
              class="ma-2" color="success" :outlined="!isChipAssetSelected(asset)"
              @click="toggleSelectAsset(asset)">
              {{asset}}
          </v-chip>
        </div>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import { longTimeAgo } from '@/utils/dateutils'

export default {
  name: 'DynamicMessage',
  data() {
    return {
      timer: null,
      latestTimeStr: '',
      selectedAsset: '',
      latestMsg: {
        title: 'List BNB on Aut 29',
        time: 1622339269795,
        assets: ['BNB', 'MDX']
      }
    }
  },
  created() {
    this.initTimer()
  },
  methods: {
    toggleSelectAsset(asset) {
      if(this.selectedAsset === asset){
        this.selectedAsset = ''
      }else{
        this.selectedAsset = asset
      }
      this.$emit('selectAsset', this.selectedAsset)
    },
    isChipAssetSelected(asset){
      return this.selectedAsset == asset
    },
    hasAsset(){
      return latestMsg && this.latestMsg.assets
    },
    initTimer() {
      this.closeTimer()
      if (this.latestMsg) {
        //1小时内
        this.timer = setInterval(() => {
          this.latestTimeStr = longTimeAgo(this.latestMsg.time)
          if (this.isGrateThan1Hour()) {
            this.closeTimer()
          }
        }, 1000)
      }
    },
    isGrateThan1Hour() {
      const current = Date.now()
      return current - this.latestMsg.time > 3600000
    },
    closeTimer() {
      if (this.timer) {
        clearInterval(this.timer)
      }
    }
  },
  beforeDestroy() {
    this.closeTimer()
  }
}
</script>
<style scoped>
.notif-time {
  padding-left: 20px;
  color: grey;
  font-size: 6px;
}
</style>
