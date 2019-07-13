<template>
    <div class="bg">
        <div class="modal">
            
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
    this.$store.dispatch('GET_POPULAR')
	},
	computed : {
			...mapGetters(['POPULAR']),
	}
}
</script>

<style lang="scss" scoped>
    .modal {
        
    }
</style>