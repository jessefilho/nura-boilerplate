<template>
  <v-app>
    <v-main>
      <v-alert
          v-if="type !== null"
          :type="type"
          width="30%"

          class="alert float-right position-absolute"
          :text="message"
      />
      <slot />
    </v-main>
  </v-app>
</template>

<script>
import {mapState} from "pinia";

export default {
  // auth: false,
  name: "default",
  middleware: ["auth"],
  computed: {
    ...mapState(useAlerts,{
      type: 'type',
      message: 'message',
    }),
  },
}
</script>

<style scoped>

</style>
