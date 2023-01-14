<template>
  <v-card shaped class="v-card-neumorphism-xs-white">
    <v-banner
      id="banner"
      single-line
    >
      <v-row>
        <v-col cols="12" sm="1" class="mr-4 text-center align-self-center">
          <v-avatar>
            <v-img
              id="userPhoto"
              :src="handlePhoto($auth.user)"
              height="100%"
              width="100%"
            />
          </v-avatar>
        </v-col>
        <v-divider vertical/>
        <v-col class="pl-0 ml-0">
          <v-row class="pl-4">
            <v-card-title id="name" v-text="`${$auth.user.first_name} ${$auth.user.last_name}`"/>
          </v-row>
          <v-divider/>
          <v-row class="pl-4">
            <v-card-subtitle id="position" v-text="$auth.user.position"/>
            <v-card-subtitle id="email" v-text="$auth.user.email"/>
          </v-row>
        </v-col>
      </v-row>
    </v-banner>
    <v-tabs
      id="drawerList"
      :value="selectedCard"
      @change="$emit('input',$event)"
      background-color="transparent"
      center-active
      show-arrows
      color="primary"
    >
      <v-tab>
        <v-banner
          id="profileBA"
          icon-color="primary"
          :icon="svgPath[0]"
          single-line
        >
          Profil Business Analytics
        </v-banner>
      </v-tab>
      <v-tab>
        <v-banner
          id="authorization"
          icon-color="primary"
          :icon="svgPath[1]"
          single-line
        >
          Autorisations
        </v-banner>
      </v-tab>
    </v-tabs>
  </v-card>
</template>

<script>
import { mdiGoogleAnalytics, mdiCheckBold } from '@mdi/js';

export default {
  name: "profileDrawer",
  data() {
    return {
      svgPath: [mdiGoogleAnalytics, mdiCheckBold]
    }
  },
  props: {
    selectedCard: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    handlePhoto(user) {
      if (!user.photo) {
        return '../default-profile-picture.jpg'
      }
      return user.photo
    },
  }
}
</script>

<style scoped>
.v-card__title {
  word-break: break-all;
}
</style>
