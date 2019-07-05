<template>
  <header class="header-bg">
    <div class="header">
      <nav id="menu" class="container">
        <img src="@/assets/images/mobile/menu.svg">
      </nav>
      <div class="liteflix">
        <img v-bind:src="getImgUrl(logo)" v-bind:alt="logo">
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
      backgroundUrl: '3-01.png'
    }
  },
  methods: {
    getImgUrl(pic) {
      return require('@/assets/images/'+pic);
    }
  }
}
</script>

<style lang="scss" scoped>


.header-bg {
}
.header {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  padding-top: 12px;
}
.menu {
  width: 21px;
  height: 13px;
  object-fit: contain;
}
.liteflix {
  height: 27px;
  text-align: center;
  flex-grow: 1;
  object-fit: contain;
}

</style>