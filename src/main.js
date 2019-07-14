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
    showModal: false,
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
    popular: [],
    genres: []
  },
  getters : {
    MOUSE_ON_USER_TITLE: state => {
      return state.mouseOnUserTitle;
    },
    MOUSE_ON_USER_SUBMENU: state => {
      return state.mouseOnUserSubMenu;
    },
    SHOW_MODAL: state => {
      return state.showModal;
    },
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
    },
    GENRE_BY_ID: state  => id => {
      /* console.log("le paso el id: " + id)
      console.log(state.genres)
      console.log(_.find(state.genres, ['id', id]))
      payload.genres.forEach(genre => console.log(`Id: ${genre.id} name: ${genre.name}`))
      return _.keyBy(state.genres, id) */

      //SI A LA FUNCION LE AGREGO FLECHA ID RECIBO PARAMETRO ID PERO CAMBIA COMO LO DEVUELVE
      // EL TEMA ES QUE STATE.GENRES NO ACEPTA EL FIND, COMO SI NO FUERA UN ARRAY
      // Y CUANDO LO LOGUEAMOS NO ES EL ARRAY DEL ESTILO QUE QUEREMOS. POR QUE?

      //return "accion"
     // return _.find(state.genres, ['id', id])
      return state.genres.find(genre => genre.id === id)
      
    },
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
    SET_SHOW_MODAL: (state,status) => {
      return state.showModal = status
    },
    SET_FEATURED_MOVIE : (state,payload) => {
      state.featuredMovie = payload
    },
    SET_UPCOMING : (state,payload) => {
      state.upcoming = payload
    },
    SET_POPULAR : (state,payload) => {
      state.popular = payload
    },
    SET_GENRES : (state,payload) => {
      state.genres = payload
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
    },
    GET_GENRES : async (context,payload) => {
      let { data } = await Axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=6f26fd536dd6192ec8a57e94141f8b20&language=es-ES')
      context.commit('SET_GENRES',data.genres)
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
