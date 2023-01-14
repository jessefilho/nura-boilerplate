<template>
  <v-container fluid pa-0>
    <v-row align="center" justify="center"
           style="height:75vh" dense>
      <v-col lg="4" md="6" sm="6" xs="12" class="grey lighten-2 fill-height d-flex flex-column justify-center align-center">
        <v-card
            class="pa-8"
            width="100%"
            elevation="5"
        >
          <v-card-title style="
                font-size: 35px;">
            Login
          </v-card-title>

          <v-card-subtitle class="pb-8">
            <p class="text-muted">Log In to your account</p>
          </v-card-subtitle>

          <Form as="v-form"
                :validation-schema="schema"
                :initial-values="initialValues"
                @submit="onSubmit"
                v-slot="{ meta: formMeta }"
          >
            <AuthTextFieldWithValidation name="email"
                                         label="E-mail"
                                         type="email"
                                         :icon="'mdi-account'"
                                         :loading="false"
            />

            <AuthTextFieldWithValidation name="password"
                                         label="Password"
                                         type="password"
                                         :counter="24"
                                         :icon="'mdi-lock'"
                                         :loading="false"
            />

            <v-row>
              <v-col class="text-center">
                <v-btn
                    width="80%"
                    class="ma-2"
                    :disabled="!formMeta.valid"
                    type="submit"
                    color="primary"
                    :loading="false"
                >
                  Sign In
                </v-btn>
              </v-col>
            </v-row>
          </Form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

</template>

<script>
import { Field, Form } from 'vee-validate';
import { mdiAccount, mdiLock } from '@mdi/js'
import * as yup from 'yup';
import {mapActions} from "pinia";

import AuthTextFieldWithValidation from "~/components/_commons/fields/AuthTextFieldWithValidation.vue";
import {useAuthentication} from "~/store/authentication/authentication.store";

const schema = yup.object({
  email: yup.string().email().required().label('E-mail'),
  password: yup.string().min(6).required(),
});

export default {
  name: "SignIn",
  components:{
    AuthTextFieldWithValidation,
    Field,
    Form
  },
  data() {
    return {
      svgPath: [mdiAccount, mdiLock],
      loading: false,
      initialValues: this.$session.inDev() ? {
        email: 'jesse@g.com',
        password: '!@#$%¨&QWEQWE',
      } : {
        email: '',
        password: '',
      },
      error: null,
      schema:schema,
      formMeta: {
        valid: null
      }
    }
  },

  methods:{
    ...mapActions(useAuthentication,{
      sign_in:'sign_in'
    }),
    onSubmit(value) {
      this.sign_in(
          {username:value.email,
            password: value.password
          }).catch( error => {
        console.log(error)
      })
    },

  }

}
</script>

<style scoped>

</style>
