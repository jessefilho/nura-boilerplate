<template>
  <v-avatar
    color="accent"
    size="default"
    :alt="fullname()"
  >
    <span class="text-h5" style="color: white">{{initial()}}</span>
  </v-avatar>
</template>

<script>

export default {
  name: "avatar",
  props:['user'],
  methods:{
    fullname(){
      return this.user.first_name+' '+this.user.last_name
    },
    initial(){
      return this.user.first_name.substring(0,1) + this.user.last_name.substring(0,1)
    }
  }
}
</script>

<style scoped>

</style>
