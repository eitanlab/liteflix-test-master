<template>
    <div class="popular-item">
      <img 
        class="item"
        :src="`https://image.tmdb.org/t/p/w500/${PopularObj.poster_path}`"
      />
      <div class="cover">
          <div class="wraper d-flex flex-column">
            <div class="d-flex flex-row justify-content-left">
              <img class="icon-plus" src="@/assets/images/desktop/play.svg" />
            </div>
            <div class="d-flex flex-row">
                <div class="description d-flex flex-column justify-content-start">
                    <p class="title">{{PopularObj.title}}</p>
                    <p>98% de coincidencia</p>
                    <p><span class="edad">+16</span>1h 30 min</p>
                    <p>Suspenso</p>
                </div>
                <img class="icon-plus" src="@/assets/images/desktop/add-list.svg" />
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
  name: 'PopularItem',
  data () {
    return {

    }
  },
  props: {
    PopularObj: Object
  }
  
}
</script>

<style lang="scss" scoped>
    .popular-item {
      width: 330px;
      height: 460px;
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
        padding: 10px;
        background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9));
        display: none;
        .wraper {
            justify-content: flex-end;
            height: 100%;
            .description {
                flex-grow: 1;
                padding-top: 7px;
                p {
                    font-family: Montserrat;
                    font-size: 12px;
                    color: rgb(255, 255, 255);
                    margin-bottom: 0;
                    &.title {
                        font-size: 18px;
                        font-weight: bold;
                    }
                    .edad {
                        width: 30px;
                        height: 16px;
                        border-radius: 9.5px;
                        background-color: rgba(255, 255, 255, 0.2);
                        display: inline-block;
                        text-align: center;
                        margin-right: 5px;
                    }
                } 
            }
            .arrow {
            margin: 31px 0;
            }
        }
      }
      &:hover > .cover {
        display: block;
      }
    }
    
</style>