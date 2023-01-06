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
      Profil Business Analytics
    </v-banner>
    <v-divider/>
    <v-row justify="center" class="ma-auto pa-4 justify-space-around">
      <v-col cols="4">
        <v-text-field
          id="username"
          :value="$auth.user.username"
          label="Nom d'utilisateur"
          readonly
        />
        <v-text-field
          id="initials"
          :value="$auth.user.initials"
          label="Initiales"
          readonly
        />
      </v-col>
      <v-col cols="4">
        <v-text-field
          id="role_principal"
          :value="$auth.user.role.name"
          label="Rôle principal"
          readonly
        />
        <v-text-field
          id="external_vermonapp_id"
          :value="$auth.user.external_vermonapp_id"
          label="ID VermonApps"
          readonly
        />
        <v-text-field
          v-if="$auth.user.external_salesforce_id !==null"
          id="external_salesforce_id"
          :value="$auth.user.external_salesforce_id"
          label="ID Salesforce"
          readonly
        />
      </v-col>
    </v-row>
    <v-row justify="center" class="ma-auto pa-4 justify-space-around">
      <v-col cols="4">
        <v-card
          elevation="0"
        >
          <v-list>
            <v-card-subtitle
              class="customList"
            >
              Groupes d'utilisateurs :
            </v-card-subtitle>
            <v-list-item-group
              id="groupList"
              v-model="selectedGroup"
            >
              <v-list-item
                v-for="groups in $auth.user.groups"
                :key="groups.role_id"
                :to="groups.home"
              >
                <v-list-item-content v-text="capitalizeFirstLetter(groups.name)"/>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-col>
      <v-col cols="4">
        <v-card
          elevation="0"
        >
          <v-list
            disabled
          >
            <v-card-subtitle
              class="customList"
            >
              Modules accessibles :
            </v-card-subtitle>
            <v-list-item-group
            id="moduleList"
            >
              <v-list-item
                v-for="(module, i) in modules"
                :key="i"
              >
                {{ capitalizeFirstLetter(module) }}
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import { mdiGoogleAnalytics } from '@mdi/js';
export default {
  name: "profileBA",
  data() {
    return {
      svgPath: mdiGoogleAnalytics,
      selectedGroup: 0,
      modules: [],
    }
  },
  methods: {
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    modulesList(roles) {
      if (roles === null) {
        throw "user.role is null"
      }
      if (roles === undefined) {
        throw "user.role is undefined"
      }
      for (const [key, value] of Object.entries(roles)) {
        if (value === true) {
          this.modules.push(key)
        }
      }
    },
  },
  mounted() {
    this.modulesList(this.$auth.user.role)
  }
}
</script>

<style scoped>
.customList {
  border-bottom: solid 1px grey !important;
}
</style>
