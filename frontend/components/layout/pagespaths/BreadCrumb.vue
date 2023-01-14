<template>
  <div v-if="crumbs.length != 0 ">

    <v-breadcrumbs
        v-if="inDev"
        :items="crumbs"
    />

  </div>

</template>

<script>
export default {
  name: "BreadCrumb",
  data (){
    return {
      inDev: this.$session.inDev(),
      items: [
        {
          text: 'Dashboard',
          disabled: false,
          href: 'breadcrumbs_dashboard',
        },
        {
          text: 'Link 1',
          disabled: false,
          href: 'breadcrumbs_link_1',
        },
        {
          text: 'Link 2',
          disabled: true,
          href: 'breadcrumbs_link_2',
        },
      ],
    }
  },
  computed: {
    // crumbs() {
    //   let fullPath = this.$route.path
    //   console.log(this.$route.matched)
    //   const params = fullPath.substring(1).split('/')
    //   // params.pop() // it remove finish path
    //   const crumbs = []
    //   let path = ''
    //
    //   params.forEach((param, index, { length }) => {
    //     path = `${path}/${param}`
    //     console.log(path)
    //     console.log(this.$router)
    //     console.log(this.$router.hasRoute(path))
    //     const match = this.$route.match(path)
    //     // console.log(path)
    //     if (match.name !== 'index') {
    //       if (index === length - 1) {
    //         crumbs.push({
    //           text: path.replace(/\//g, '-').slice(1),
    //           disabled: true,
    //         })
    //       } else {
    //         crumbs.push({
    //           text: path.replace(/\//g, '-').slice(1),
    //           disabled: false,
    //           href: path + '/',
    //         })
    //       }
    //     }
    //   })
    //
    //   // console.log(crumbs)
    //   return crumbs
    // },
    crumbs() {
      return this.items
    }


  },
}
</script>

<style scoped>

</style>
