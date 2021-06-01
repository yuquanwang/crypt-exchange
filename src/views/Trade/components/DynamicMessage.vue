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
          <v-chip v-for="(asset, idx) in latestMsg.assets" :key="asset" class="ma-2" color="success" :outlined="!isChipAssetSelected(asset)" @click="toggleSelectAsset(asset)">
            {{ asset }}
          </v-chip>
        </div>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import { longTimeAgo } from '@/utils/dateutils'
import { WebsockUri } from '@/utils/app'

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
      },
      websock: null,
      wsErrorCounter: 0
    }
  },
  created() {
    this.initTimer()
    this.initWebSocket()
  },
  destroyed() {
    //离开路由之后断开websocket连接
    this.websock.close()
    this.closeTimer()
  },
  methods: {
    initWebSocket() {
      //初始化weosocket
      const wsuri = WebsockUri
      let _this = this
      if ('Websocket' in window) {
        _this.websock = new WebSocket(wsuri)
      } else if ('MozWebSocket' in window) {
        _this.websock = new MozWebSocket(wsuri)
      }else{
        _this.websock = new WebSocket(wsuri)
      }
      let heartbeat = {
        timeout: 5000,
        timerObj: null,
        reset: () => {
          clearInterval(this.timerObj)
          return this
        },
        start: () => {
          this.timerObj = setInterval(() => {
            const ht = JSON.stringify({ type: 'heartbeat' })
            _this.websock.send(ht)
          }, this.timeout)
        }
      }
      _this.websock.onmessage = (msg) => {
        //数据接收
        const redata = JSON.parse(msg)
        if ('newmsg' === redata.type) {
          _this.latestMsg = redata.data
        }
      }
      _this.websock.onopen = () => {
        //连接建立之后执行send方法发送数据
        this.wsErrorCounter = 0
        let actions = { type: 'test', data: 'conn' }
        _this.websocket.send(JSON.stringify(actions))
        heartbeat.reset().start()
      }
      _this.websock.onerror = this.wsError
      _this.websock.onclose = () => console.log('断开连接', e)
    },
    wsError() {
      //连接建立失败重连,0ing,1on,2closing,3closed
      while (this.wsErrorCounter < 5 && this.websock.readyState === 3) {
        this.wsErrorCounter++;
        this.initWebSocket()
      }
    },
    toggleSelectAsset(asset) {
      if (this.selectedAsset === asset) {
        this.selectedAsset = ''
      } else {
        this.selectedAsset = asset
      }
      this.$emit('selectAsset', this.selectedAsset)
    },
    isChipAssetSelected(asset) {
      return this.selectedAsset === asset
    },
    hasAsset() {
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
