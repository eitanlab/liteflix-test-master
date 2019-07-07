<template>
  <div class="homepage-container">
    <Header/>
    <FeaturedMovie />
    <ComingSoon />
    <Popular />
  </div>
</template>

<script>

import Header from '@/components/Header.vue';
import FeaturedMovie from '@/components/FeaturedMovie.vue';
import ComingSoon from '@/components/ComingSoon.vue';
import Popular from '@/components/Popular.vue';

export default {
  name: 'Homepage',
  data () {
    return {
      
    }
  },
  components: {
    Header,
    FeaturedMovie,
    ComingSoon,
    Popular
  }
}
</script>

<style lang="scss" scoped>
  * {
    box-sizing: border-box;
  }
  .homepage-container {
    background-color: #000;
  }

</style>
