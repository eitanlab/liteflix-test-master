<template>
    <div class="coming-soon container">
        <h3 class="title">Próximamente</h3>
        <div class="list">
            <img 
                :src="require('@/assets/images/mobile/1-03.png')" 
                :srcset="require('@/assets/images/mobile/1-01.png') + ' 1x, ' + require('@/assets/images/mobile/1-02.png') + ' 2x'" class="item"/>
            <img 
                :src="require('@/assets/images/mobile/1-03.png')" 
                :srcset="require('@/assets/images/mobile/1-01.png') + ' 1x, ' + require('@/assets/images/mobile/1-02.png') + ' 2x'" class="item"/>
            <img 
                :src="require('@/assets/images/mobile/1-03.png')" 
                :srcset="require('@/assets/images/mobile/1-01.png') + ' 1x, ' + require('@/assets/images/mobile/1-02.png') + ' 2x'" class="item"/>
            <img 
                :src="require('@/assets/images/mobile/1-03.png')" 
                :srcset="require('@/assets/images/mobile/1-01.png') + ' 1x, ' + require('@/assets/images/mobile/1-02.png') + ' 2x'" class="item"/>    
        </div>
    </div>
</template>

<script>

export default {
  name: 'ComingSoon',
  data () {
    return {

    }
  },
  methods: {
    
  }
}
</script>

<style lang="scss" scoped>
    .coming-soon {
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
            grid-template-columns: repeat(auto-fit, minmax(329px, 1fr));
            justify-items: center;
            height: 834px;
            .item {
                height: 201px;
            }
        }
    }
</style>