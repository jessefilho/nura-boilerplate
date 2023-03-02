<template>
  <v-carousel
      cycle
      height="400"
      width="100%"
      hide-delimiter-background
      :show-arrows="false"
  >
    <v-carousel-item
        v-for="(slide, i) in slides"
        :key="i"
        :src="slide.src"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
        cover

    >
      <div class="d-flex fill-height justify-center align-center">
        <div class="text-h2 text-white" >
          {{ slide.title }} Slide
        </div>
<!--        <div class="text-capitalize text-white" >-->
<!--          {{ slide.subtitle }} Slide-->
<!--        </div>-->
<!--        <div class="text-capitalize text-white" >-->
<!--          {{ slide.link }} Slide-->
<!--        </div>-->
      </div>

    </v-carousel-item>
  </v-carousel>
</template>

<script>

import house1 from '../../../assets/images/medias/french-house-1.jpg'
import house2 from '../../../assets/images/medias/french-house-2.jpg'
import house3 from '../../../assets/images/medias/french-house-3.jpg'
import house4 from '../../../assets/images/medias/french-house-4.jpg'
import house5 from '../../../assets/images/medias/french-house-5.jpg'

export default {
  data () {
    return {
      colors: [
        'indigo',
        'warning',
        'pink darken-2',
        'red lighten-1',
        'deep-purple accent-4',
      ],
      slides: [
        {
          title: 'First',
          subtitle: 'subtitle',
          link: '',
          src: house1,
        },
        {
          title: 'Second',
          subtitle: 'subtitle',
          link: '',
          src: house2
        },
        {
          title: 'Third',
          subtitle: 'subtitle',
          link: '',
          src: house3
        },
        {
          title: 'Fourth',
          subtitle: 'subtitle',
          link: '',
          src: house4
        },{
          title: 'Fifth',
          subtitle: 'subtitle',
          link: '',
          src: house5
        },
      ],

    }
  },
}
</script>