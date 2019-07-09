<template>
    <div class="coming-soon container">
        <h3 class="title">Próximamente</h3>
        <div class="list" >
            <img 
							class="item"
							:key="index" 
							v-for="(item, index) in UPCOMING"
              :src="`https://image.tmdb.org/t/p/w300/${item.backdrop_path}`"
						/>
        </div>
    </div>
</template>

<script>

import {mapGetters} from 'vuex'

export default {
  name: 'ComingSoon',
  data () {
    return {

    }
  },
  mounted(){
    this.$store.dispatch('GET_UPCOMING')
	},
	computed : {
		...mapGetters(['UPCOMING']),
	}
}
</script>

<style lang="scss" scoped>
    .coming-soon {
        margin-bottom: 40px;
        position: relative;
        top: -64px;
        .title {
            height: 24px;
            font-family: Raleway;
            font-size: 20px;
            font-weight: 800;
            color: rgb(255, 255, 255);
						@include media-breakpoint-up(lg) {  
							margin-bottom: 20px;
						}
        }
        .list {
            display: grid;
            align-items: center;
            grid-template-columns: repeat(auto-fit, minmax(329px, 1fr));
            justify-items: center;
            height: 834px;
						@include media-breakpoint-up(lg) {  
							align-items: start;
							grid-template-columns: repeat(auto-fit, minmax(255px, 1fr));
							justify-items: start;
							height: 155px;
							grid-gap: 1rem;
							margin-bottom: 40px;
							.item {
								width: 255px;
            	}
						}
            .item {
								width: 255px;
            }
        }
    }
</style>