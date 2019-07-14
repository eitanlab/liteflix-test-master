<template>
    <div class="coming-soon container">
        <h3 class="title">Próximamente</h3>
        <div class="list" >
            <ComingSoonItem 
            v-for="(ComingSoonObj, index) in UPCOMING" 
            :ComingSoonObj="ComingSoonObj"
            :key="ComingSoonObj.index"
            :genre="GENRE_BY_ID((ComingSoonObj.genre_ids[0]))"
            />
        </div>
    </div>
</template>

<script>

import {mapGetters} from 'vuex'
import ComingSoonItem from './ComingSoonItem';

export default {
  name: 'ComingSoon',
  data () {
    return {

    }
  },
  components: {
    ComingSoonItem
  },
  mounted(){
    this.$store.dispatch('GET_GENRES')
	},
	computed : {
    ...mapGetters(['UPCOMING','GENRE_BY_ID']),
	}
}
</script>

<style lang="scss" scoped>
    .coming-soon {
        margin-bottom: 40px;
        position: relative;
        top: -20px;
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
            grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
            justify-items: center;
            grid-gap: 10px;
						@include media-breakpoint-up(lg) {  
							align-items: start;
							grid-template-columns: repeat(auto-fit, minmax(255px, 1fr));
							justify-items: start;
							grid-gap: 1rem;
							margin-bottom: 40px;
						}
        }
    }
</style>