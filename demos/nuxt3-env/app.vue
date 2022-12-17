<template>
  <div>
    <NuxtPage />
  </div>
</template>
<script setup>
const config = useRuntimeConfig()

console.log('private',config.apiSecret)
console.log('public',config.joke)
</script>
