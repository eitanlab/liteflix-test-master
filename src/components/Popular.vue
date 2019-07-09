<template>
    <div class="popular container">
        <h3 class="title">POPULARES DE LITEFLIX</h3>
        <div class="list">
            <img 
                :src="require('@/assets/images/mobile/3-02.png')" 
                :srcset="require('@/assets/images/mobile/3-01.png') + ' 1x, ' + require('@/assets/images/mobile/3-02.png') + ' 2x'" class="item"/>
            <img 
                :src="require('@/assets/images/mobile/3-02.png')" 
                :srcset="require('@/assets/images/mobile/3-01.png') + ' 1x, ' + require('@/assets/images/mobile/3-02.png') + ' 2x'" class="item"/>
            <img 
                :src="require('@/assets/images/mobile/3-02.png')" 
                :srcset="require('@/assets/images/mobile/3-01.png') + ' 1x, ' + require('@/assets/images/mobile/3-02.png') + ' 2x'" class="item"/>
            <img 
                :src="require('@/assets/images/mobile/3-02.png')" 
                :srcset="require('@/assets/images/mobile/3-01.png') + ' 1x, ' + require('@/assets/images/mobile/3-02.png') + ' 2x'" class="item"/>    
        </div>
    </div>
</template>

<script>

export default {
  name: 'Popular',
  data () {
    return {

    }
  },
  methods: {
    
  }
}
</script>

<style lang="scss" scoped>
    .popular {
        margin-bottom: 40px;
        position: relative;
        top: -64px;
        @include media-breakpoint-up(lg) {  
            margin-left: 165px;
        }
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
            .item {
                height: 328px;
            }
        }
    }
</style>