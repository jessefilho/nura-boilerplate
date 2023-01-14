<template>
  <v-app >
    <v-app-bar
        :absolute="false"
        elevation="1">
      <v-btn icon @click.stop="drawer = !drawer">
        <v-icon v-if="drawer"> mdi-menu-open </v-icon>
        <v-icon v-else> mdi-menu </v-icon>
      </v-btn>
      <v-toolbar-title v-text="title"/>
      <bread-crumb></bread-crumb>
      <v-spacer/>
    </v-app-bar>
    <v-footer
        style="z-index: 2000;"
        fixed
        app
    >
      <span> Vermon USA &copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
    <drawers v-model="drawer" :user="user" />

    <v-main>
      <v-container fluid>
        <slot/>
      </v-container>
    </v-main>

  </v-app>
</template>

<script>
import ProfileMenu from "../components/user/profiling/ProfileMenu";
import Avatar from "../components/user/profiling/avatar";
import ModuleList from "../components/layout/sidelist/ModuleList";
import BreadCrumb from "../components/layout/pagespaths/BreadCrumb";
import Drawers from "~/components/layout/navigation/drawers.vue";

export default {
  middleware: ["auth"],
  name: "private",
  components: {Drawers, BreadCrumb, ModuleList, Avatar, ProfileMenu},
  data() {
    return {
      drawer: true,
      user: this.$session.user(),
      title: 'NURA',
    }
  },

}
</script>

<style scoped>

</style>
