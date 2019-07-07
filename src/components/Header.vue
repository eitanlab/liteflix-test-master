<template>
  <div>
    <header class="header container">
      <nav id="menuIcon" >
        <img src="@/assets/images/mobile/menu.svg" v-on:click='menuOpened = !menuOpened'>
      </nav>
      <div class="liteflix" :class="[ menuOpened ? 'left' : 'center' ]">
        <img src="@/assets/images/mobile/liteflix.svg" v-bind:alt="logo">
      </div>
    </header>
    <MobileMenu :menuOpened="menuOpened" />
  </div>
</template>

<script>

import MobileMenu from './MobileMenu.vue';

export default {
  name: 'Header',
  data () {
    return {
      logo: 'liteflix.svg',
      backgroundUrl: {
          backgroundImage: 'url(https://dummyimage.com/360x545/000/FFF), linear-gradient(to top, rgba(0, 0, 0, 0.2), #000000)'
      },
      menuOpened: true
    }
  },
  methods: {

  },
  components: {
    MobileMenu
  }
}
</script>

<style lang="scss" scoped>



.header {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  padding-top: 12px;
  position: absolute;
  z-index: 999;
  #menuIcon {
    width: 30px;
    height: 30px;
    object-fit: contain;
    position: relative;
    text-align: center;
  }
  .liteflix {
    height: 27px;
    text-align: center;
    position: absolute;
    object-fit: contain;
    transform: translate(-50%, 0);
    z-index: 999;
    &.left {left: 100px;transition: .3s ease all;}
    &.center {left: 50%;transition: .3s ease all;}
  }
}



</style>