<template>
  <div class="text-white">
    <select v-model="$i18n.locale">
      <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">{{ locale }}</option>
    </select>

  </div>
</template>

<script>
export default {
  name: "LocalChanger",

}
</script>

<style scoped>

</style>