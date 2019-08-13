<template>
<div class="row">
<no-ssr>
    <HeroStatic/>
</no-ssr>
</div>
</template>

<script>
import HeroStatic from '../layouts/partials/hero-static';
export default {
  components: {
    HeroStatic
  },
  head(){
    return{
      title: '3D Laser scanning | 3D Sculptures | Stone Monuments | Busts & Heads',
      bodyAttrs: {class: 'home'},
      meta: [
          {hid: 'og:title', name: 'og:title', content: '3D Laser scanning | 3D Sculptures | Stone Monuments | Busts & Heads'},
          {hid: 'description', name: 'description', content: 'We specialise in precision 3D laser scanned sculptures and monuments.'},
          {hid: 'og:description', name: 'og:description', content: 'We specialise in precision 3D laser scanned sculptures and monuments.'}
      ]
    }
  }
}

</script>

<style>

</style>
