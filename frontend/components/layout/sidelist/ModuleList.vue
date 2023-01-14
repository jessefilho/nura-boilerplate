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
        <v-icon color="primary">
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

      //todo: to refactore it
      // get main group id
      const group_id = this.user['members'].find(item => item.main === true)['group_id']
      // extract main menu then convert to an array of objects
      const main_menu = eval(this.user.groups.find(item => item.id === group_id).menu)
      // pick the other groups (here we may get all groups, then remove the duplicated menus, but main menu disappears)
      let aux_menus = Object.assign([], ...this.user.groups.map(item => eval(item.menu)) )
      // finally, merge and ensure a list with unique menu
      //  the sequence is important, the main menu MUST be on top
      return [...new Map([...main_menu, ...aux_menus].map(item =>
        [item['title'], item])).values()];
      // return [{}]
    }
  }
}
</script>

<style scoped>

</style>
