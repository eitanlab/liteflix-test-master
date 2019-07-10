<template>
    <!-- Vi que en desktop el linear-gradient es diferente, pero me está llevando mucho tiempo encontrar la manera de aplicarlo según breakpoint por estar dentro del style -->
    <div class="featured-movie-bg" :style="`backgroundImage: linear-gradient(to bottom, rgba(0, 0, 0, 0.2), #000000), url(https://image.tmdb.org/t/p/original/${FEATURED_MOVIE.backdrop_path});`">
        <div class="container">
            <div class="titles">
                <h2>ORIGINAL DE <span>LITEFLIX</span></h2>
                <h1>{{FEATURED_MOVIE.title}}</h1>
            </div>
            <div class="interaction-bar">
                <div class="play">
                    <img src="@/assets/images/mobile/play.svg"><span>Reproducir</span>
                </div>
                <div class="add-list d-none d-lg-inline">
                    <img src="@/assets/images/mobile/plus.svg"><span>Mi Lista</span>
                </div>
                <img class="d-lg-none add-list-mobile" src="@/assets/images/mobile/add-list.svg">
            </div>
            <div class="description d-none d-lg-block">
                <p>{{FEATURED_MOVIE.overview}}</p>
            </div>
        </div>
    </div>
</template>

<script>

import {mapGetters} from 'vuex'

export default {
  name: 'FeaturedMovie',
  data () {
    return {

    }
	},
	mounted(){
        this.$store.dispatch('GET_FEATURED_MOVIE')
	},
	computed : {
		...mapGetters(['FEATURED_MOVIE']),
	}
}
</script>

<style lang="scss" scoped>
    .featured-movie-bg {
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        height: 545px;
        width: 100%;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        @include media-breakpoint-up(lg) {  
            height: 760px;
        }
        .titles {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            color: #FFF;
            @include media-breakpoint-up(lg) { 
                justify-content: flex-start;
                align-items: flex-start;
            }
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
                @include media-breakpoint-up(lg) {
                    width: 392px;
                    text-align: left;
                }
            }
        }
        .interaction-bar {
            display: flex;
            flex-direction: row;
            color: #FFF;
            justify-content: center;
            display: flex;
            line-height: 40px;
            position: relative;
            @include media-breakpoint-up(lg) {
                justify-content: left;
                max-width: 1140px;
            }
            .play,
            .add-list {
                width: 160px;
                height: 40px;
                border-radius: 20px;
                background-color: rgba(0, 0, 0, 0.5);
                color: #FFF;
                text-align: left;
                cursor: pointer;
                @include media-breakpoint-up(lg) {
                    margin-right: 30px;
                }
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
            .add-list-mobile {
                position: absolute;
                right: 10px;
                cursor: pointer;
                top: 3px;
            }
        }
        .description {
            color: #FFF;
            width: 537px;
            font-family: Montserrat;
            font-size: 18px;
            text-align: left;
            margin: 25px 0;
        }
    }
    
    
    
</style>