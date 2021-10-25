<template>
    <Particles
        id="tsparticles"

        :options="{
                    background: {
                        color: {
                            value: '#041731'
                        },

                    },
                    fullScreen: { enable: true ,
                   },
                    fpsLimit: 60,
                    interactivity: {
                        detectsOn: 'window',
                        events: {
                            onClick: {
                                enable: true,
                                mode: 'push'
                            },
                            onHover: {
                                enable: true,
                                mode: 'grab'
                            },
                            resize: true
                        },
                        modes: {
                            bubble: {
                                distance: 400,
                                duration: 2,
                                opacity: 0.8,
                                size: 40
                            },
                            push: {
                                quantity: 4,
                                duration:0.2
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4
                            }
                        }
                    },
                    particles: {
                        color: {
                            value: '#ffffff'
                        },
                        links: {
                            color: '#ffffff',
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1
                        },
                        collisions: {
                            enable: true
                        },
                        move: {
                            direction: 'none',
                            enable: true,
                            outMode: 'out',
                            random: false,
                            speed: 2,
                            straight: false
                        },
                        number: {
                            density: {
                                enable: true,
                                value_area: 1000
                            },
                            value: 100
                        },
                        opacity: {
                            value: 0.5
                        },
                        shape: {
                            type: 'circle'
                        },
                        size: {
                            random: true,
                            value: 3
                        }
                    },
                    detectRetina: true
                }"
    />
  <div class="min-h-screen relative">

    <header class="relative bg-blue-500 bg-opacity-5" >
        <div class="flex flex-row ">
      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 justify-center flex flex-row">
        <div class=" text-xl text-white uppercase font-semibold content-center">
        <h2 class=" text-center"> Curriculum Vitae - Diogo Alhada</h2>
            <div class="hidden sm:flex sm:items-center ">
                <!-- Settings Dropdown -->
                <div class=" justify-self-end">
                    <div   class=" absolute top-0 right-0 mt-2 mr-2 rounded-md " >
                        <LocalChanger/></div>

                </div>
            </div>
      </div>
      </div>

        </div>
    </header>
<!--    <div class="hidden sm:flex sm:items-center sm:ml-6">-->
<!--      &lt;!&ndash; Settings Dropdown &ndash;&gt;-->
<!--      <div class="ml-3 relative justify-self-end">-->
<!--        <div   class=" fixed top-0 right-0 mt-2 mr-2 rounded-md shadow-lg" >-->
<!--          <LocalChanger/></div>-->

<!--      </div>-->
<!--    </div>-->
    <nav class="bg-blue-800 bg-opacity-5">
      <!-- Primary Navigation Menu -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-center h-16">
          <div class="flex">
            <div class="hidden space-x-8 sm:-my-px  sm:flex">
              <div >
              <BreezeNavLink   :href="route('index')" :active="route().current('index')" >
                {{$t("nav.curriculum")}}
              </BreezeNavLink>
              <BreezeNavLink >
                {{$t("nav.contacts")}}
              </BreezeNavLink>
              <BreezeNavLink >
                {{$t("nav.hobbies")}}
              </BreezeNavLink></div>
            </div>

          </div>
          </div>
        </div>
    </nav>
    <!-- Page Content -->
<main>


  <slot />
</main>
  </div>
</template>

<style scoped>

#tsparticles {
    position: fixed;
    margin: 0;
    padding: 0;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
}
</style>

<script>
import { Head, Link } from '@inertiajs/inertia-vue3';
import LocalChanger from '@/Components/LocalChanger';
import BreezeNavLink from '@/Components/NavLink.vue'
export default {
    components: {
      Head,
      Link,
      LocalChanger,
      BreezeNavLink
    },

}
</script>
