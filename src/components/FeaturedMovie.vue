<template>
    <div class="featured-movie-bg" :style="backgroundUrl">
        <div class="cover"></div>
        <div class="titles">
            <h2>ORIGINAL DE <span>LITEFLIX</span></h2>
            <h1>Kids at school</h1>
        </div>
        <div class="interaction-bar container">
            <div class="play-btn">
                <img src="@/assets/images/mobile/play.svg" class="play"><span>Reproducir</span>
            </div>
            <img src="@/assets/images/mobile/add-list.svg" class="add-List">
        </div>
    </div>
</template>

<script>

export default {
  name: 'FeaturedMovie',
  data () {
    return {
      backgroundUrl: {
          backgroundImage: 'url(https://dummyimage.com/360x545/e3e3e3/fff), linear-gradient(to top, rgba(0, 0, 0, 0.2), #000000)'
      }
    }
  },
  methods: {
    
  }
}
</script>

<style lang="scss" scoped>
    .featured-movie-bg {
        background-size: 100%;
        height: 545px;
        width: 100%;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .cover {
            width: 100%;
            height: 183px;
            transform: rotate(-180deg);
            background-image: linear-gradient(to top, rgba(0, 0, 0, 0), rgb(0, 0, 0));
            position: absolute;
            bottom: 122px;
        }
        .titles {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            color: #FFF;
            h2 {
                font-family: Montserrat;
                font-size: 18px;
                margin-bottom: 0;
                span {
                    font-weight: bold;
                }
            }
            h1 {
                line-height: 1;
                width: 257px;
                font-family: 'Roboto Slab';
                font-size: 72px;
                font-weight: bold;
            }
        }
        .interaction-bar {
            display: flex;
            flex-direction: row;
            color: #FFF;
            justify-content: right;
            display: flex;
            line-height: 40px;
            width: 100%;
            max-width: 360px;
            .play-btn {
                width: 160px;
                height: 40px;
                border-radius: 20px;
                background-color: rgba(0, 0, 0, 0.5);
                color: #FFF;
                text-align: left;
                cursor: pointer;
                img {
                    margin: {
                        left: 12px;
                        right: 6px;
                    }
                }
                span {
                    font-family: Montserrat;
                    font-size: 16px;
                }
            }
            > img {
                position: relative;
                margin-left: 55px;
                cursor: pointer;
            }
        }
    }
    
    
    
</style>