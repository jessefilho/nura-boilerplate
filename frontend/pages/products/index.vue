<template>
<h1> Hello products </h1>
</template>

<script>

definePageMeta({
  layout: "private",

});
export default {
  middleware: ["auth"],
  name: "index"
}
</script>

<style scoped>

</style>
