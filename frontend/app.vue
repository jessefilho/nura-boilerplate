<template>
  <NuxtLayout>
    <v-alert
        v-if="type !== null"
        :type="type"
        width="30%"
        class="alert"
        :text="message"
    />
    <NuxtPage />
  </NuxtLayout>
</template>
<script >
import {mapState} from "pinia";
import {useAlerts} from "~/store/alerts.store";
export default {
  name: "default",
  computed: {
    ...mapState(useAlerts,{
      type: 'type',
      message: 'message',
    }),
  },
}
</script>
