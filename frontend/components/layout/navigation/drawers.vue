<template>
  <v-navigation-drawer
      v-model="drawer"
      :rail="rail"
      permanent
      @click="rail = false"
  >
    <v-list-item v-if="!rail">
      <v-list-item-content>
        <v-list-item-title class="text-h6">
          MENU
        </v-list-item-title>
        <v-list-item-subtitle>
          Application Modules
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-list-item nav >
      <template v-slot:prepend>
        <avatar :user="user" />
      </template>

      <template v-slot:title>
        <profile-menu :user="user"/>
      </template>

      <template v-slot:append>
        <v-btn
            variant="text"
            icon="mdi-chevron-left"
            @click.stop="rail = !rail"
        ></v-btn>
      </template>

    </v-list-item>


    <v-divider></v-divider>


    <module-list :rail="rail"/>

  </v-navigation-drawer>
</template>

<script>

import Avatar from "~/components/user/profiling/avatar.vue";
import ProfileMenu from "~/components/user/profiling/ProfileMenu.vue";
import ModuleList from "~/components/layout/sidelist/ModuleList.vue";

export default {
  name: "drawers",
  components: {ModuleList, ProfileMenu, Avatar},
  props:['user'],
  data(){
    return {
      drawer: true,
      rail: false,
    }
  }
}
</script>

<style scoped>

</style>
