<template>
  <div class="text-center">
    <v-menu
        :nudge-width="200"
        :close-on-content-click="false"
        location="bottom"
    >
      <template v-slot:activator="{ props }">
        <v-btn
            v-bind="props"
            elevation="0"
        >
          {{ user.first_name.substring(0,1) + '. '}} {{ user.last_name.split(' ')[0] }}
        </v-btn>
      </template>

      <v-card>
        <v-list>
          <v-list-item
              :title="user.first_name+ ' '+ user.last_name"
              :subtitle="user.position"
          >
            <template v-slot:prepend>
              <avatar :user="user" />
            </template>

            <template v-slot:append>
              <v-btn
                  @click="fav = !fav"
                  elevation="0"
              >
                <v-icon color="primary" v-if="fav">{{ svgPath }}</v-icon>
                <v-icon v-else color="primary">{{ svgPath }}</v-icon>

              </v-btn>
            </template>

          </v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-list density="compact" v-if="inDev">
          <v-list-item-group
              color="primary"
          >
            <v-list-item
                v-for="(item, i) in items"
                :key="i"
                :to="item.to"
                :title="item.text"
                @click="menu=false"
            >
              <template v-slot:prepend>
                <v-icon color="accent">{{ item.icon }}</v-icon>
              </template>

            </v-list-item>
          </v-list-item-group>
        </v-list>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
              variant="flat"
              color="error"
              text
              @click="sign_out()"
          >
            Logout
          </v-btn>
        </v-card-actions>

      </v-card>

    </v-menu>

  </div>
</template>

<script>
import Avatar from "./avatar";
import {mapActions} from "pinia";
import {useAuthentication} from "~/store/authentication/authentication.store";

export default {
  name: "ProfileMenu",
  components: {Avatar},
  props:['user'],
  data () {
    return {
      inDev: this.$session.inDev(),
      svgPath: 'mdi-thumb-up',
      fav:false,
      menu:false,
      items: [
        // { text: 'Real-Time', icon: 'mdi-info' },
        { text: 'Mon profil', icon: 'mdi-account', to: '/user/profile' },
        { text: 'À propos de cette application', icon: 'mdi-information', to: '/about' },
      ],
    }
  },
  methods:{
    ...mapActions(useAuthentication,{
      logout:'sign_out'
    }),
    sign_out(){
      /**
       * todo: call logout procedure
       */
      // this.$auth.$storage.removeUniversal('user')
      // Remove saved data from sessionStorage
      this.$session.logout()
      this.logout()
      navigateTo('/sign_in')
    }
  }
}
</script>

<style scoped>

.v-menu__content--fixed {
  left: 265px !important;
  top: 85px !important;
}

</style>
