<template>
  <header class="header-bg" :style="backgroundUrl">
    <div class="header container">
      <nav id="menu" >
        <img src="@/assets/images/mobile/menu.svg">
      </nav>
      <div class="liteflix">
        <img src="@/assets/images/mobile/liteflix.svg" v-bind:alt="logo">
      </div>
    </div>
  </header>
</template>

<script>

export default {
  name: 'Header',
  data () {
    return {
      logo: 'liteflix.svg',
      backgroundUrl: {
          backgroundImage: 'url(https://dummyimage.com/360x545/000/fff), linear-gradient(to top, rgba(0, 0, 0, 0.2), #000000)'
      }
    }
  },
  methods: {
    
  }
}
</script>

<style lang="scss" scoped>


.header-bg {
  background-size: 100%;
  height: 545px;
}
.header {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  padding-top: 12px;
}
#menu {
  width: 21px;
  height: 13px;
  object-fit: contain;
  position: relative;
  left: 15px;
}
.liteflix {
  height: 27px;
  text-align: center;
  position: absolute;
  object-fit: contain;
  left: 50%;
  transform: translate(-50%, 0);
}

</style>