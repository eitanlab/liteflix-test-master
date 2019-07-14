<template>
  <div v-if="SHOW_MODAL">
    <transition name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true" @click="$store.commit('SET_SHOW_MODAL', false)">&times;</span>
                    </button>
                </div>
                <div class="modal-body container">
                    <div class="add-file">addfile</div>
                    <div class="name">
                      <p>NOMBRE DE LA PELICULA</p>
                    </div>
                    <div class="category">
                      <p>CATEGORIA</p>
                    </div>
                </div>
                <div class="modal-footer">
                    <button  type="button" class="btn btn-secondary" @click="$store.commit('SET_SHOW_MODAL', false)">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>

import {mapGetters} from 'vuex'

export default {
  name: 'Modal',
  data () {
    return {

    }
  },
  components: {
  },
  mounted(){
	},
	computed : {
			...mapGetters(['SHOW_MODAL']),
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
        .modal-body {
          display: grid;
          grid-template-columns: repeat (2,211px);
          grid-gap: 30px;
          .add-file {
            grid-column: 1 / 3
          }
          .name,
          .category {
            grid-column: span / 2
          }
        }
      }
    }

    
</style>