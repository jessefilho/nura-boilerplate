<template>
  <v-container class="fill-height container--fluid" >
    <SignIn/>
  </v-container>
</template>
<script>
import SignIn from "~/components/authentification/SignIn.vue";

definePageMeta({
  layout: "default",
});
export default {
  middleware: ["auth"],
  components: {SignIn},
  name: "index",
}
</script>

<style scoped>

</style>
