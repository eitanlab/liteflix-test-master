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
    featuredMovie: {},
    upcoming: [],
    popular: []
  },
  getters : {
    USUARIOS : state => {
      return state.usuarios;
    },
    FEATURED_MOVIE : state => {
      return state.featuredMovie;
    },
    UPCOMING: state => {
      return state.upcoming;
    },
    POPULAR: state => {
      return state.popular;
    }
  },
  mutations : {
    setMouseOnUserTitle: (state,status) => {
      if (status == true) {
        return state.mouseOnUserTitle = status
      } else {
        setTimeout( () => state.mouseOnUserTitle = status, 1000)
      } 
    },
    setMouseOnUserSubMenu: (state,status) => {
      return state.mouseOnUserSubMenu = status
    },
    SET_FEATURED_MOVIE : (state,payload) => {
      state.featuredMovie = payload
    },
    SET_UPCOMING : (state,payload) => {
      state.upcoming = payload
    },
    SET_POPULAR : (state,payload) => {
      state.popular = payload
    }
  },
  actions: {
    GET_FEATURED_MOVIE : async (context,payload) => {
      let { data } = await Axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=6f26fd536dd6192ec8a57e94141f8b20')
      data = _.orderBy(data.results, 'release_date', 'desc')
      context.commit('SET_FEATURED_MOVIE',data[0])
    },
    GET_UPCOMING : async (context,payload) => {
      let { data } = await Axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=6f26fd536dd6192ec8a57e94141f8b20')
      data = _.orderBy(data.results, 'release_date', 'desc')
      data = _.slice(data, 0, 4)
      context.commit('SET_UPCOMING',data)
    },
    GET_POPULAR : async (context,payload) => {
      let { data } = await Axios.get('https://api.themoviedb.org/3/movie/popular?api_key=6f26fd536dd6192ec8a57e94141f8b20')
      data = _.orderBy(data.results, 'release_date', 'desc')
      data = _.slice(data, 0, 4)
      context.commit('SET_POPULAR',data)
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
