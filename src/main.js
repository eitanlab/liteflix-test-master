import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/main.scss'

import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'

import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const store = new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    mouseOnUserTitle: false,
    mouseOnUserSubMenu: false,
    usuarios: [
      { nombre: "Ernesto Garmendia",
        selected: true
      },
      { nombre: "User 03",
        selected: false
      },
      { nombre: "User 04",
        selected: false
      }
    ]
  },
  getters : {
    USUARIOS : state => {
      return state.usuarios;
    }
  },
  mutations : {
    setMouseOnUserTitle: (state,status) => {
      if (status == false) {
        setTimeout( () => state.mouseOnUserTitle = status, 1000)
      } else {
        return state.mouseOnUserTitle = status;
      } 
    },
    setMouseOnUserSubMenu: (state,status) => {
      return state.mouseOnUserSubMenu = status;
  }
  }
})

Vue.config.productionTip = false

window.mainVueObj = new Vue({
  el: '#app',
  store,
  router,
  components: {App},
  template: '<App/>'
})
