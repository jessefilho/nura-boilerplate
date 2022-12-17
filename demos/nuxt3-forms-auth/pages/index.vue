<template>

    <v-row align="center" justify="center" style="height:50vh" dense>
      <v-col cols="12" lg="6" md="6">
        <v-card

            justify="center"
            class="mx-auto"
            max-width="344"
        >
          <v-card-title>
            Welcome to NURA boilerplate
          </v-card-title>
          <v-card-subtitle>
            Developed in Nuxt3 and Rails7
          </v-card-subtitle>
          <v-card-actions>
            <v-row>
              <v-col md="6">
                <v-btn
                    variant="text"
                    color="teal-accent-4"
                    to="sign_in"
                >
                  Sign In
                </v-btn>
              </v-col>
              <v-col md="6">
                <v-btn
                    variant="text"
                    color="teal-accent-4"
                    to="sign_up"
                >
                  Sign Up
                </v-btn>
              </v-col>
            </v-row>


          </v-card-actions>

          <v-expand-transition>
            <v-card
                v-if="reveal"
                class="transition-fast-in-fast-out v-card--reveal"
                style="height: 100%;"
            >
              <v-card-text class="pb-0">
                <p class="text-h4 text--primary">
                  Origin
                </p>
                <p>late 16th century (as a noun denoting a place where alms were distributed): from medieval Latin eleemosynarius, from late Latin eleemosyna ‘alms’, from Greek eleēmosunē ‘compassion’ </p>
              </v-card-text>
              <v-card-actions class="pt-0">
                <v-btn
                    variant="text"
                    color="teal-accent-4"
                    @click="reveal = false"
                >
                  Close
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-expand-transition>
        </v-card>
      </v-col>
    </v-row>

</template>

<script>
export default {
  name: "index",
  data: () => ({
    reveal: false,
  }),
}
</script>

<style>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
</style>
