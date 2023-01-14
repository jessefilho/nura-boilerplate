<template>
  <v-card
    class="v-card-neumorphism-xs-white"
    height="100%"
    width="100%"
  >
    <v-banner
      class="linear-gradient-blue "
      width="100%"
      elevation="0"
      :icon="svgPath"
      icon-color="white"
      single-line
    >
      Autorisations
    </v-banner>
    <v-divider class="mb-4"/>
    <v-row class="ma-auto pa-4"
    >
      <v-card
        id="switches"
        elevation="0"
        class="cardAutorisation transparent"
      >
        <v-switch
          v-for="(item) in switches"
          :key="item.id"
          :value="item.value"
          :label="item.label"
          :prepend-icon="item.prependIcon"
          v-model="item.value"
          @click.native="switchValues({id: item.id, value: item.value})"
          color="primary"
        />
      </v-card>
    </v-row>
  </v-card>
</template>

<script>
import { mdiCheckBold, mdiGoogleAnalytics, mdiShareAll, mdiArchive, mdiCamera, mdiMapMarker } from '@mdi/js';

export default {
  name: "authorizations",
  data() {
    return {
      svgPath: mdiCheckBold,
      switches: [
        {
          id: 'allow_ba_session_analysis',
          label: "Suivi des données de navigation",
          prependIcon: mdiGoogleAnalytics,
          value: this.$store.getters["profile/allow_ba_session_analysis"],
        },
        {
          id: 'allow_ba_session_sharing',
          label: "Partage des données de navigation",
          prependIcon: mdiShareAll,
          value: this.$store.getters["profile/allow_ba_session_sharing"],
        },
        {
          id: 'allow_ba_session_archiving',
          label: "Archivage des sessions",
          prependIcon: mdiArchive,
          value: this.$store.getters["profile/allow_ba_session_archiving"],
        },
        {
          id: 'allow_ba_photo_usage',
          label: "Droit à l'image",
          prependIcon: mdiCamera,
          value: this.$store.getters["profile/allow_ba_photo_usage"],
        },
        {
          id: 'allow_ba_geolocation',
          label: "Géolocalisation",
          prependIcon: mdiMapMarker,
          value: this.$store.getters["profile/allow_ba_geolocation"],
        },
      ],
    }
  },
  methods: {
    switchValues(authorization) {
      return this.$store.dispatch('profile/switchValues', {authorization})
    },
  }
}
</script>

<style scoped>
.cardAutorisation {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: space-around;
}

.v-input {
  margin: 15px;
}
</style>
