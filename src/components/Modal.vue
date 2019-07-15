<template>
  <!-- Me faltó validar el formulario y tomar la url local del archivo a subir.
  Tampoco llegué a completar los pasos 2 y 3 del proceso (subiendo, éxito y error) -->
  <div v-if="SHOW_MODAL">
    <transition name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper">
            <div class="modal-content">
                <div class="modal-head">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true" @click="$store.commit('SET_SHOW_MODAL', false)">&times;</span>
                    </button>
                </div>
                <div class="modal-body container">  
                  <div class="form" id="addMovie" novalidate="true">
                    <div class="add-file">
                      <p><img src="@/assets/images/desktop/clip.svg" class="clip"><span>Agregar archivo</span> o arrastrarlo y soltarlo aquí</p>
                    </div>
                    <div class="name">
                      <label for="name">NOMBRE DE LA PELICULA</label>
                      <input type="text" name="movieName" id="movie-name" v-model="message">
                    </div>
                    <div class="category">
                      <label for="movie">CATEGORIA</label>
                      <select class="select" name="movie" id="movie" @change="SET_FORM_GENRE($event)" >
                        <option v-for="(genre, index) in GENRES" :value="genre.id">{{genre.name}}</option>
                      </select>
                    </div>
                    <div class="button-container">
                      <button value="Submit" @click="$store.commit('ADD_MOVIE',UPLOAD_FORM)" class="btn btn-submit">Subir película</button>
                    </div>
                  </div>
                </div>
                
            </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>

import {mapGetters, mapMutations} from 'vuex'

export default {
  name: 'Modal',
  data () {
    return {

    }
  },
  methods : {
    ...mapMutations(['SET_SHOW_MODAL','ADD_MOVIE','CHECK_FORM','SET_FORM_GENRE'])
	},
	computed : {
      ...mapGetters(['SHOW_MODAL','GENRES','ERRORS','UPLOAD_FORM']),
      message: {
        get () {
          return this.$store.state.uploadForm.original_title
        },
        set (value) {
          this.$store.commit('UPDATE_FORM_NOMBRE', value)
        }
      },
	}
}
</script>

<style lang="scss" scoped>
    .modal-mask {
      position: fixed;
      z-index: 9998;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background-color: rgba(0, 0, 0, .5);
      transition: opacity .3s ease;
      .modal-wrapper {
        display: flex;
        flex-direction: column;
        vertical-align: middle;
        width: 730px;
        height: 354px;
        position: relative;
        margin-left: auto;
        margin-right: auto;
        top: 50%;
        transform: translateY(-50%);
        .modal-content {
          border-radius: 10px;
          .modal-head {
            padding: 7px 14px;
            .close {
              opacity: 1;
              font-weight: 500;
            }
          }
          .form {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 30px;
            font-family: Montserrat;
            .add-file {
              grid-column: 1 / 3;
              height: 100px;
              border-radius: 10px;
              border: dashed 1px rgb(155, 155, 155);
              text-align: center;
              vertical-align: middle;
              display: flex;
              align-items: center;
              justify-content: center;
              p {
                font-family: Montserrat;
                font-size: 16px;
                color: rgb(155, 155, 155);
                margin: 0;
                span {
                  font-weight: bold;
                  color: rgb(0, 118, 255);
                }
              }
            }
            .name,
            .category {
              grid-column: span / 2;
              label {
                line-height: 15px;
                font-size: 12px;
                font-weight: 500;
                letter-spacing: 5px;
                color: #9b9b9b;
              }
              input,
              select {
                width: 100%;
                border: 0;
                border-bottom: 1px solid #000;
                height: 24px;
                line-height: 19px;
                font-size: 16px;
              }
              .select {
                appearance: none;
                option {
                  font-family: inherit;
                  border-bottom: 1px solid #000;
                  height: 24px;
                  color: #9b9b9b;
                  &:checked {
                    color: #000;
                  }
                }
              }
            }
            .button-container {
              grid-column: 1 / 3;
              text-align: center;
              .btn-submit {
                width: 350px;
                height: 70px;
                border-radius: 35px;
                background-color: rgb(222, 222, 222);
                color: #FFF;
              }
            }
          }
        }
      }
    }

    
</style>