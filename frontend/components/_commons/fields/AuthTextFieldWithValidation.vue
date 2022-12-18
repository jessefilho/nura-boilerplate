<script setup>
import { defineProps, toRef } from 'vue';
import { useField } from 'vee-validate';

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  svgPath: [],
  loading: {
    type: Boolean,
    required: false,
  },
  counter:0
});

const { value, handleBlur, errors } = useField(toRef(props, 'name'), undefined);
</script>



<template>

  <v-text-field
      v-if="type !== 'password'"
      v-model="value"
      @blur="handleBlur"
      :label="label"
      :error-messages="errors"
      :type="type"
      variant="underlined"
      :prepend-inner-icon="svgPath[0]"
      :loading="loading"
  />
  <v-text-field
      v-else
      v-model="value"
      @blur="handleBlur"
      :label="label"
      :error-messages="errors"
      :type="type"
      :counter="counter"
      variant="underlined"
      :prepend-inner-icon="svgPath[1]"
      :loading="loading"
  />
</template>
