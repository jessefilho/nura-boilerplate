<template>
  <div>
    <v-list-item
      v-for="(item, i) in selectedMenu()"
      :key="i"
      :to="item.to"
      :title="item.title"
      router
      exact
    >
      <template v-slot:prepend>
        <v-icon color="accent">
          {{item.icon}}
        </v-icon>
      </template>
    </v-list-item>
  </div>
</template>

<script>
export default {
  name: "ModuleList",
  props:['rails'],
  data(){
    return {
      user: this.$session.user(),
    }
  },
  mounted() {
    // console.log(this.user)
  },
  methods:{
    selectedMenu() {
      return [{
        to: '/products',
        title:'Products',
        icon: 'mdi-vector-arrange-above'

      }]
    }
  }
}
</script>

<style scoped>

</style>
