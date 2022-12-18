<template>
  <v-container class="fill-height container--fluid" >
    <SignInCard/>
  </v-container>
</template>
<script>
import SignInCard from "~/components/authentification/SignInCard.vue";
export default {
  components: {SignInCard},
  middleware: ["auth"],
  layout: 'public',
  name: "index",
}
</script>

<style scoped>
</style>
