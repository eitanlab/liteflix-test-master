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
    localMovies: [
      {
        id: 9992,
        original_title: 'Película 1',
        genre_ids: [28],
        url: '/rjbNpRMoVvqHmhmksbokcyCr7wn.jpg',
        release_date: '2019-07-08'
      },
      {
        id: 9990,
        original_title: 'Película 2',
        genre_ids: [26],
        url: '/rjbNpRMoVvqHmhmksbokcyCr7wn.jpg',
        release_date: '2019-07-14'
      }
    ],
    genres: [{id: 0, name: ''}],
    uploadForm: {
      id: 0,
      original_title: '',
      genre_ids: [0],
      url: '/rjbNpRMoVvqHmhmksbokcyCr7wn.jpg',
      release_date: '2019-07-14'
    }
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
    GENRES: state => {
      return state.genres;
    },
    GENRE_BY_ID: state  => id => {
      return state.genres.find(genre => genre.id === id);
    },
    UPLOAD_FORM: state => {
      return state.uploadForm;
    }
  },
  mutations : {
    SET_MOUSE_ON_TITLE: (state,status) => {
      if (status == true) {
        return state.mouseOnUserTitle = status
      } else {
        setTimeout( () => state.mouseOnUserTitle = status, 1000)
      } 
    },
    SET_MOUSE_ON_SUBMENU: (state,status) => {
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
    },
    ADD_MOVIE : (state,movie) => {
      state.localMovies.push(movie)
    },
    UPDATE_FORM_NOMBRE : (state,value) => {
      state.uploadForm.original_title = value
    },
    SET_FORM_GENRE : (state,event) => {
      state.uploadForm.genre_ids = event.target.value
    },
    UPDATE_LOCAL_MOVIES : (state,payload) => {
      console.log(state.localMovies.results)
      console.log(payload)
      state.localMovies.concat(payload)
    },
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
      console.log('1')
      let { data } = await Axios.get('https://api.themoviedb.org/3/movie/popular?api_key=6f26fd536dd6192ec8a57e94141f8b20')
      data = _.orderBy(data.results, 'release_date', 'desc')
      data = _.slice(data, 0, 4)
      context.commit('SET_POPULAR',data)
    },
    GET_GENRES : async (context,payload) => {
      let { data } = await Axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=6f26fd536dd6192ec8a57e94141f8b20&language=es-ES')
      console.log('2')
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
