// Vuetify Documentation https://vuetifyjs.com

import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import VuetifyToast from 'vuetify-toast-snackbar'

Vue.use(Vuetify)

Vue.use(VuetifyToast, {
  x: 'right', // default
  y: 'bottom', // default
  color: 'info', // default
  icon: 'info',
  timeout: 3000, // default
  dismissable: true, // default
  autoHeight: false, // default
  multiLine: false, // default
  vertical: false, // default
  shorts: {
    custom: {
      color: 'purple'
    }
  },
  property: '$toast' // default
})
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
