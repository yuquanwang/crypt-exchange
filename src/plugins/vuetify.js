// Vuetify Documentation https://vuetifyjs.com

import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import Message from 'vue-m-message'
import 'vue-m-message/dist/index.css'

// will mount `Vue.prototype.$msg`
Vue.use(Message, { name: 'msg' })
Vue.use(Vuetify)
const theme = {
  primary: '#2196f3',
  secondary: '#009688',
  accent: '#e91e63',
  info: '#00CAE3',
  success: '#009688',
  warning: '#ff9800',
  error: '#f44336'
}

export default new Vuetify({
  breakpoint: { mobileBreakpoint: 960 },
  icons: {
    values: { expand: 'mdi-menu-down' }
  },
  theme: {
    light: true,
    themes: {
      dark: theme,
      light: theme
    }
  }
})
