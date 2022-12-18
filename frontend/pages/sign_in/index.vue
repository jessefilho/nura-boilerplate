<template>
  <v-container class="fill-height container--fluid" >
<!--    <SignInCard/>-->
    <SignIn/>
  </v-container>
</template>
<script>
// import SignInCard from "~/components/authentification/SignInCard.vue";
import SignIn from "~/components/authentification/SignIn.vue";
export default {
  components: {SignIn},
  // components: {SignIn, SignInCard},
  middleware: ["auth"],
  layout: 'public',
  name: "index",
}
</script>

<style scoped>
</style>
