<template>
    <div class="user-nav d-none d-lg-block d-flex flex-column">
        <div class="wraper d-flex flex-row">
            <nav class="primary">
                <ul class="d-flex flex-row">
                    <li><a href="#">Niños</a></li>
                    <li><a href="#"><img src="@/assets/images/desktop/bell.svg" class="bell"></a></li>
                    <li @mouseover="$store.commit('setMouseOnUserTitle', true)" @mouseleave="$store.commit('setMouseOnUserTitle', false)" >
                        <img src="@/assets/images/desktop/user-01.svg" class="fill">
                        <img src="@/assets/images/desktop/arrow.svg" class="arrow">
                    </li>
                </ul>
            </nav>
        </div>
        <div class="sub-nav" 
					v-if="mouseOnUserTitle || mouseOnUserSubMenu"
					@mouseover="$store.commit('setMouseOnUserSubMenu', true)" @mouseleave="$store.commit('setMouseOnUserSubMenu', false)"
				>
            <div class="container d-flex flex-column">
								<div class="user-btn" :class="item.selected ? 'selected' : 'unselected'" v-bind="key" v-for="item in USUARIOS">
										<img :src="item.selected ? require('@/assets/images/mobile/fill-1.svg') : require('@/assets/images/mobile/fill-1.svg')" class="oval"><span>{{ item.nombre | truncate(8, '...') }}</span>
								</div>
								<nav class="config">
									<ul class="d-flex flex-column">
											<li><a href="#">Configuración</a></li>
											<li><a href="#">Ayuda</a></li>
											<li><a href="#">Logout</a></li>
									</ul>
								</nav>
						</div>
						<div class="rectangle"></div>
        </div>
    </div>
</template>

<script>

import {mapGetters} from 'vuex';

export default {
  name: 'DesktopUserNav',
  data () {
		return {
				
		}
  },
	computed : {
		mouseOnUserTitle(){
     return this.$store.state.mouseOnUserTitle
		},
		mouseOnUserSubMenu(){
     return this.$store.state.mouseOnUserSubMenu
		},
		...mapGetters(['USUARIOS'])
  	//Other computed properties
	},
	filters: {
    truncate: function (text, length, suffix) {
				if (text.length > length) {
						return text.substring(0, length) + suffix;
				} else {
						return text;
				}
		},
  }
}
</script>

<style lang="scss" scoped>
    .user-nav {
        flex-grow: 1;
        position: relative;
        .wraper {
            justify-content: flex-end;
            nav {
                margin-top: 6px;
                ul {
                    list-style: none;
                    padding: 0 0 46px;
                    margin: 0;
                    height: 30px;
                    align-items: baseline;
                    li {
                        margin-right: 20px;
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
                        }
                        .fill {
                            width: 25px;
                            height: 25px;
                            border-radius: 50%;
                        }
                        .arrow {
                            width: 12px;
                            height: 6px;
                            object-fit: contain;
                        }
                    }
                }
            }    
        }
        .sub-nav {
            width: 130px;
            height: 218px;
            border-radius: 5px;
            background-color: rgb(255, 255, 255);
            position: absolute;
            right: 0;
						padding-top: 11px;
						z-index: 999;
            .rectangle {
                width: 17px;
                height: 17px;
                transform: rotate(-315deg);
                border-radius: 5px;
                background-color: inherit;
                position: absolute;
                right: 20px;
                top: -6px;
            }
            .user-btn {
                margin: 3px 0 6px;
                width: 111px;
                height: 25px;
                border-radius: 18.5px;
                color: #000;
                text-align: left;
                cursor: pointer;
								&.selected {
									height: 37px;
									background-color: rgb(255, 255, 255);
									box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
									margin-bottom: 0;
									.oval {
										background-color: rgb(206, 0, 255);
										margin: 6px 8px;
									}
								}
                .oval {
                    width: 25px;
                    height: 25px;
										background-color: rgb(155, 155, 155);
                    border-radius: 50%;
                    padding: 5px;
                    margin: 0 8px;
										background-color: rgb(155, 155, 155);
                }
                span {
                    font-family: Montserrat;
                    font-size: 12px;
                }
            }
						nav.config {
							ul {
									list-style: none;
									padding: 0;
									margin: 0;
									li { 
										a {
											font-family: Montserrat;
											display: block;
											padding: 7px 0;
											text-decoration: none;
											color: #000;
											font-size: 12px;
											border-bottom: solid 1px rgb(204, 204, 204);
										}
										&:last-child a {
												border-bottom: none;
												font-weight: bold;
										}
									}
								}
							}
        }
    }

</style>