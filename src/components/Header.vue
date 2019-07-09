<template>
  <div>
    <header class="header container-fluid">
      <nav id="menuIcon" class="d-lg-none">
        <img src="@/assets/images/mobile/menu.svg" v-on:click='menuOpened = !menuOpened'>
      </nav>
      <div class="liteflix" :class="[ menuOpened ? 'left' : 'center' ]">
        <img src="@/assets/images/mobile/liteflix.svg" alt="Liteflix">
      </div>
      <DesktopPrimaryNav />
      <DesktopUserNav />
    </header>
    <MobileNav :menuOpened="menuOpened" />
  </div>
</template>

<script>

import MobileNav from './MobileNav.vue';
import DesktopPrimaryNav from './DesktopPrimaryNav.vue';
import DesktopUserNav from './DesktopUserNav.vue';

export default {
  name: 'Header',
  data () {
    return {
      menuOpened: false
    }
  },
  methods: {

  },
  components: {
    MobileNav,
    DesktopPrimaryNav,
    DesktopUserNav
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
  @include media-breakpoint-up(lg) {  
    padding: 12px 165px;
  }
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
    @include media-breakpoint-down(lg) {
      &.left {left: 100px;transition: .3s ease all;}
      &.center {left: 50%;transition: .3s ease all;}
    }
    @include media-breakpoint-up(lg) {  
      position: relative;
      transform: none;
    }
  }
}



</style>