<template>
    <div class="popular container">
        <h3 class="title">POPULARES DE LITEFLIX</h3>
        <div class="list">
					<img 
					class="item"
					:key="index" 
					v-for="(item, index) in POPULAR"
					:src="`https://image.tmdb.org/t/p/w300/${item.poster_path}`"
					/>
        </div>
    </div>
</template>

<script>

import {mapGetters} from 'vuex'

export default {
  name: 'Popular',
  data () {
    return {

    }
  },
  mounted(){
    this.$store.dispatch('GET_POPULAR')
	},
	computed : {
			...mapGetters(['POPULAR']),
	}
}
</script>

<style lang="scss" scoped>
    .popular {
        padding-bottom: 40px;
        position: relative;
        .title {
            height: 24px;
            font-family: Raleway;
            font-size: 20px;
            font-weight: 800;
            color: rgb(255, 255, 255);
        }
        .list {
            display: grid;
            align-items: center;
            grid-template-columns: repeat(auto-fit, minmax(163px, 1fr));
            justify-items: center;
            height: 659px;
            @include media-breakpoint-up(lg) {
                grid-template-columns: repeat(auto-fit, minmax(253px, 1fr));
                justify-items: start;
                grid-gap: 1rem;
                height: auto;
            }
            .item {
				width: 100%;
            }
        }
    }
</style>