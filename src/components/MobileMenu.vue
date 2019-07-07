<template>
    <div class="mobile-menu" :class="[ menuOpened ? 'opened' : 'closed' ]">
        <div class="bg">
            <div class="wraper container d-flex flex-column">
                <div class="user-btn">
                    <img src="@/assets/images/mobile/fill-1.svg" class="oval"><span>Ernesto Garmendia</span>
                </div>
                <nav class="user">
                    <ul class="d-flex flex-column">
                        <li><a href="#">Cambiar usuario</a></li>
                        <li><a href="#">Configuración</a></li>
                        <li><a href="#">Ayuda</a></li>
                    </ul>
                </nav>
                <nav class="primary">
                    <ul class="d-flex flex-column">
                        <li><img src="@/assets/images/mobile/bell.svg" class="bell"><a href="#">Novedades</a></li>
                        <li><a href="#">Series</a></li>
                        <li><a href="#">Películas</a></li>
                        <li><a href="#">Mi lista</a></li>
                        <li><a href="#">Niños</a></li>
                    </ul>
                </nav>
                <div class="add-movie-btn">
                    <img src="@/assets/images/mobile/plus.svg"><span>Agregar película</span>
                </div>
                <p class="log-out">Log out</p>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'MobileMenu',
  data () {
    return {

    }
  },
  props: {
      menuOpened: {
        type: Boolean,
        default: false
      }
  },
  methods: {
    
  }
}
</script>

<style lang="scss" scoped>
    .mobile-menu {
        background-color: rgba(0, 0, 0, 0.6);
        position: absolute;
        z-index: 555;
        width: 100vw;
        font-family: Montserrat;
        &.opened {
            left: 0;
            transition: .3s ease all;
            
        }
        &.closed {
            left: -100vw;
            transition: .3s ease all;
        }
        .bg {
            width: 228px;
            height: 100vh;
            background-color: #000;
            top: 0;
            position: relative;
            .wraper {
                position: relative;
                .user-btn {
                    margin-top: 62px;
                    width: 193px;
                    height: 37px;
                    border-radius: 20px;
                    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
                    background-color: rgb(34, 34, 34);
                    color: #FFF;
                    text-align: left;
                    cursor: pointer;
                    .oval {
                        width: 25px;
                        height: 25px;
                        background-color: rgb(206, 0, 255);
                        border-radius: 50%;
                        padding: 5px;
                        margin: 7px 8px;
                    }
                    span {
                        font-family: Montserrat;
                        font-size: 12px;
                    }
                }
                nav {
                    margin: {
                        top: 20px;
                        right: 5px;
                    }
                    ul {
                        list-style: none;
                        padding: 0;
                        margin: 0;
                        a {
                            display: block;
                            padding: 7px 0;
                            text-decoration: none;
                            color: #FFF;
                        }
                    }
                    &.user a {
                        font-size: 12px;
                        border-bottom: solid 1px rgb(34, 34, 34);
                    }
                    &.primary {
                        li {
                            display: flex;
                            img {margin-right: 5px;}
                            a {font-size: 14px;}
                        }
                        
                    }
                }
                .add-movie-btn {
                    width: 193px;
                    height: 40px;
                    border-radius: 20px;
                    background-color: #ff0000;
                    color: #FFF;
                    text-align: left;
                    margin: 22px 0;
                    cursor: pointer;
                    img {
                        margin: 12px 11px;
                    }
                    span {
                        font-family: Montserrat;
                        font-size: 14px;
                    }
                }
                p.log-out {
                    width: 48px;
                    height: 15px;
                    font-family: Montserrat;
                    font-size: 12px;
                    font-weight: bold;
                    color: #FFF;
                }
            }
        }
    }
</style>