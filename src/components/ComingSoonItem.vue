<template>
    <div class="coming-soon-item">
      <img 
        class="item"
        :src="`https://image.tmdb.org/t/p/w400/${ComingSoonObj.backdrop_path}`"
      />
      <div class="cover">
          <div class="d-flex flex-column">
            <div class="d-flex flex-row justify-content-end">
              <img class="icon-plus" src="@/assets/images/desktop/add-list.svg" />
              <img class="icon-like" src="@/assets/images/desktop/add-list.svg" />
            </div>
            <div class="d-flex flex-row justify-content-center">
              <img class="icon-play" src="@/assets/images/desktop/play.svg" />
            </div>
            <div class="d-flex flex-column justify-content-start">
              <p class="title">{{ComingSoonObj.title}}</p>
              <p>98% de coincidencia<span>+16</span>1h 30 min</p>
              <p>{{genre.name}}</p>
            </div>
            <img src="@/assets/images/desktop/arrow.svg" class="arrow">
          </div>
        </div>
      </div>
    </div>
</template>

<script>

import {mapGetters} from 'vuex'

export default {
  name: 'ComingSoonItem',
  data () {
    return {

    }
  },
  props: {
    ComingSoonObj: Object,
    genre: Object
  }
  
}
</script>

<style lang="scss" scoped>
    .coming-soon-item {
      width: 330px;
      position: relative;
      cursor: pointer;
      > img {
        width: 100%;
      }
      @include media-breakpoint-up(lg) {  	
        width: 255px;
      }
      .cover {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        padding: 5px 10px;
        background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9));
        display: none;
        p {
          font-family: Montserrat;
          font-size: 12px;
          color: rgb(255, 255, 255);
          margin-bottom: 0;
          &.title {
            font-size: 16px;
            font-weight: bold;
          }
        }
        .arrow {
          margin: 31px 0;
        }
        .icon-plus {
          margin-right: 10px;
        }
      }
      &:hover > .cover {
        display: block;
      }
    }
    
</style>