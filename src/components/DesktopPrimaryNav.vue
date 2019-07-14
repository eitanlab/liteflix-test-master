<template>
    <div class="primary-nav d-none d-lg-block">
        <div class="wraper d-flex flex-row">
            <nav class="primary">
                <ul class="d-flex flex-row">
                    <li><a href="#" class="selected">Inicio</a></li>
                    <li><a href="#">Series</a></li>
                    <li><a href="#">Películas</a></li>
                    <li><a href="#">Agregados recientemente</a></li>
                    <li><a href="#">Mi lista</a></li>
                </ul>
            </nav>
            <div @click="$store.commit('SET_SHOW_MODAL', true)" class="add-movie-btn">
                <img src="@/assets/images/mobile/plus.svg"><span>Agregar película</span>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'DesktopPrimaryNav',
  data () {
    return {

    }
  },
  props: {

  },
  methods: {
    
  }
}
</script>

<style lang="scss" scoped>
    .primary-nav {
        nav {
            ul {
                list-style: none;
                padding: 0;
                margin: 0 20px;
                height: 30px;
                align-items: flex-end;
                li {
                    margin-right: 18px;
                    &:last-child {
                        margin-right: 0;
                    }
                    a {
                        display: block;
                        text-decoration: none;
                        color: #FFF;
                        font-size: 14px;
                        &.selected {
                            font-weight: bold;
                        }
                        &:hover {
                            text-shadow: 0.5px 0px 0px white;
                        }
                    }
                }
            }
        }
        .add-movie-btn {
            width: 40px;
            height: 40px;
            margin-right: 153px;
            border-radius: 20px;
            background-color: #ff0000;
            color: #FFF;
            text-align: left;
            overflow: hidden;
            span {
                display: none;
                
            }
            cursor: pointer;
            img {
                margin: 12px 11px;
            }
            &:hover {
                width: 193px;
                margin-right: 0;
                transition: .3s ease all;
                span {
                    display: inline;
                    transition: .3s ease all;
                }
            }
            span {
                font-family: Montserrat;
                font-size: 14px;
            }
        }
    }
</style>