<template>
  <div >
      <div class="flex flex-row  text-white mt-2" >
        <div  v-for="locale in $i18n.availableLocales" :key="`${locale}`">
          <LangLink @click="$i18n.locale=locale" :active="$i18n.locale===locale">
            {{locale}}
          </LangLink>
      </div>
  </div>
  </div>

</template>

<script>
import LangLink from "@/Components/LangLink";
export default {
  name: "LocalChanger",
  props: [ 'active'],
  components:{
    LangLink,
  },

}
</script>

<style scoped>

</style>
