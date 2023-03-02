<template>
  <v-app id="inspire">
    <v-app-bar flat :elevation="2">
      <template v-slot:prepend>
        <v-app-bar-nav-icon v-if="false"></v-app-bar-nav-icon>
      </template>
      <v-app-bar-title>Site name</v-app-bar-title>

        <v-btn
            v-for="link in links"
            :key="link"
            :to="`/${link}`"
            variant="text"

        >
          {{ link }}

        </v-btn>

    </v-app-bar>

    <v-main class="bg-grey-lighten-3">
      <v-container>

        <v-row>
          <v-col cols="2">
            <v-sheet rounded="lg" v-if="false">
              <v-list rounded="lg">
                <v-list-item
                    v-for="n in 5"
                    :key="n"
                    link
                >
                  <v-list-item-title>
                    List Item {{ n }}
                  </v-list-item-title>
                </v-list-item>

                <v-divider class="my-2"></v-divider>

                <v-list-item
                    link
                    color="grey-lighten-4"
                >
                  <v-list-item-title>
                    Refresh
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-sheet>
          </v-col>

          <v-col cols="8">
            <v-row>
              <v-col cols="12">
                <medias />
              </v-col>
            </v-row>
            <v-sheet
                min-height="70vh"
            >
              <!-- main content -->
              <v-container>
                <slot/>
              </v-container>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>

</template>
<script>
import Medias from "~/components/layout/carousels/medias.vue";

export default {
  components: {Medias},
  data: () => ({
    links: [
      'home',
      'promotion',
      'blog',
    ],
  }),
}
</script>
<style>
.v-main {
  /*background: url('assets/images/bg_sign_in.jpg') no-repeat center center fixed !important;*/
  /*background-size: cover;*/
}
</style>
