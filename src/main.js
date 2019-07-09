import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/main.scss'

import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import Axios from 'axios'
import _ from 'lodash'

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
    ],
    featuredMovie: {}
  },
  getters : {
    USUARIOS : state => {
      return state.usuarios;
    },
    FEATURED_MOVIE : state => {
      return state.featuredMovie;
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
    },
    SET_FEATURED_MOVIE : (state,payload) => {
      state.featuredMovie = payload
    },
  },
  actions: {
    GET_FEATURED_MOVIE : async (context,payload) => {
      let { data } = await Axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=6f26fd536dd6192ec8a57e94141f8b20')
      data = _.orderBy(data.results, 'release_date', 'desc')
      context.commit('SET_FEATURED_MOVIE',data[0])
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
