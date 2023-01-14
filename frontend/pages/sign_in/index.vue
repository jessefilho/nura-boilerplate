<template>
  <v-container class="fill-height container--fluid" >
    <SignIn/>
  </v-container>
</template>
<script>
import SignIn from "~/components/authentification/SignIn.vue";
export default {
  components: {SignIn},
  middleware: ["auth"],
  layout: 'public',
  name: "index",
}
</script>

<style scoped>

</style>
