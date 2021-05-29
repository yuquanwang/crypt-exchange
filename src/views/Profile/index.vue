<template>
  <!--
  1.appkey设置
  2.登陆
  3.订单（下的各个平台的订单）
  4.资产情况（可能）
  -->
  <div>
    <v-divider></v-divider>
    <v-expansion-panels multiple v-model="panels" style="padding-right:1px">
      <v-expansion-panel v-for="(item, idx) in allPanels" :key="idx" class="panel">
        <v-expansion-panel-header :hide-actions="openState" class="panelheader">
          <v-row align="center" class="spacer" no-gutters>
            <v-col>
              <v-avatar size="36px">
                <v-icon medium :color="item.color" v-text="item.icon" class="icon-left"></v-icon>
              </v-avatar>
            </v-col>
            <v-col class="hidden-xs-only" v-if="!openState">
              <strong v-html="item.name"></strong>
            </v-col>
          </v-row>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <component :is="item.component" />
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>
<script>
import AppKeySetting from './AppKeySetting.vue'
import Assets from './Assets.vue'
import Orders from './Orders.vue'
export default {
  name: 'UserProfile',
  components: {
    AppKeySetting,
    Assets,
    Orders
  },
  props: {
    open: { type: Boolean, default: false }
  },
  watch: {
    open(isOpen, old) {
      this.openState = !isOpen
      if (!isOpen) {
        this.panels = []
      }
    }
  },
  data() {
    return {
      allPanels: [
        { component: 'assets', icon: 'mdi-cash-100', name: '资产', color: 'green darken-2' },
        { component: 'orders', icon: 'mdi-clipboard-flow-outline', name: '订单', color: 'blue darken-2' },
        { component: 'app-key-setting', icon: 'mdi-key-link', name: 'AppKey', color: 'teal' }
      ],
      openState: false,
      panels: [0,1,2]
    }
  }
}
</script>
<style>
.icon-left {
  position: absolute;
}
.panel .v-expansion-panel-content__wrap{
  padding:0 4px 16px
}
.panelheader{
  padding:0px 10px
}
</style>
