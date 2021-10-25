<template>
    <Head title="Welcome" />
  <div class="min-h-screen bg-gradient-to-b from-blue-900  to-gray-800">
    <header class=" bg-gradient-to-b from-blue-900  to-gray-800 shadow items-center" >
      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 justify-center">
        <div class=" text-xl text-white uppercase font-semibold content-center">
        <h2 class=" text-center"> Curriculum Vitea - Diogo Alhada</h2>
      </div>
      </div>
    </header>
    <div class="hidden sm:flex sm:items-center sm:ml-6">
      <!-- Settings Dropdown -->
      <div class="ml-3 relative justify-self-end">
        <div   class="fixed  top-0 right-0 mt-2 mr-2 rounded-md shadow-lg" >
          <LocalChanger/></div>

      </div>
    </div>
    <nav class="bg-gradient-to-b from-gray-800 to-blue-900 border-b border-black">
      <!-- Primary Navigation Menu -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-center h-16">
          <div class="flex">
            <div class="hidden space-x-8 sm:-my-px  sm:flex">
              <BreezeNavLink >
                {{$t("nav.curriculum")}}
              </BreezeNavLink>
              <BreezeNavLink >
                {{$t("nav.contacts")}}
              </BreezeNavLink>
              <BreezeNavLink >
                {{$t("nav.hobbies")}}
              </BreezeNavLink>
            </div>

          </div>
          </div>
        </div>
    </nav>
    <!-- Page Content -->
<main>

    <p class="text-white">{{$t("hello")}}</p>
  <slot />
</main>
  </div>
</template>

<style scoped>

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
