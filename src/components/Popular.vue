<template>
    <div class="popular container">
        <h3 class="title">POPULARES DE LITEFLIX</h3>
        <div class="list" >
            <PopularItem 
            v-for="(PopularObj, index) in POPULAR" 
            :PopularObj="PopularObj"
            :key="PopularObj.index"
            :genre="GENRE_BY_ID((PopularObj.genre_ids[0]))"
            />
        </div>
    </div>
</template>

<script>

import {mapGetters} from 'vuex'
import PopularItem from './PopularItem';

export default {
  name: 'Popular',
  data () {
    return {

    }
  },
  components: {
    PopularItem
  },
  mounted(){
    this.$store.dispatch('GET_POPULAR','GET_GENRES')
	},
    computed : {
        ...mapGetters(['POPULAR','GENRE_BY_ID']),
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
            height: 508px;
            @include media-breakpoint-up(lg) {
                grid-template-columns: repeat(auto-fit, minmax(253px, 1fr));
                justify-items: start;
                grid-gap: 1rem;
                height: 660px;
            }
        }
    }
</style>