<template>
<div class="row">

    <div class="row fs flex hero" v-for="item in items" :key="item.id">
        <div class="row fs flex hero__viewer">
          <model-obj v-on:on-load="onLoad(item)" v-bind:src="item.hero" v-bind:background-color="item.bgColor" v-bind:background-alpha="item.bgAlpha"  v-bind:rotation="item.rotation" v-bind:scale="item.scale" v-bind:position="item.position" v-bind:key="item.id"></model-obj>
        </div>
        <div class="row hero__excerpt">
            <div class="row">
              <h1 class="hero__excerpt__title" v-html="item.title"></h1>
              <div class="hero__excerpt__content" v-html="item.excerpt"></div>
            </div>
        </div>
    </div>

</div>
</template>

<script>
import { ModelObj } from 'vue-3d-model';

export default {
 components: { ModelObj },

 data: function() {
         return  {
           items: [
        {
            id: 1,
            title: '3D Laser Scanning &amp;<br/>Precision Sculpture Specialist',
            excerpt: '<p>Even with all the new technology the world has to offer, since the dawn of mankind the greatest method to preserve human memory has always been to set them in stone.</p><p>At M&M we embrace technology to further improve that age old method of preserving memories in stone by improving on it with high precision 3D laser scanning and robotic sculpting technology.</p>',
            hero: '/models/head15.obj', 
            material: '/models/head15.mtl',
            bgColor: '#fff', 
            bgAlpha: 0, 
            rotation: {x: 0, y:0, z: 0},
            scale: {x: 0.8, y:0.8, z: 0.8},
            position: {x: 0, y:0.8, z: 0}
        }
      ]
         }
    },


methods: {
  onLoad (item) {
      this.rotate(item);
  },
  rotate (item) {

      item.rotation.y += 0.001;
      requestAnimationFrame( () =>  this.rotate(item) );
  }
}
}
</script>

<style scoped>


.hero__viewer {position: absolute; top: 0; left:0; z-index: 1;}
.hero__excerpt {position: absolute; top: 0; left:0; z-index: 1; padding: 0em; align-items: center;justify-self: center;}

.hero__excerpt__title{color: #b0952a; font-weight:100; font-size: 3.2em; line-height: 1.1em; margin: 0 0 0.5em 0; text-transform: uppercase;}
.hero__excerpt__content{color: #222;font-family: 'Montserrat', sans-serif; font-weight: 100; font-size: 1.2em; line-height: 1.5em; margin: 0 0 1em 0;}

@media only screen and (min-width : 1024px) {
  .hero__excerpt {padding: 4em; }
.hero__excerpt__content p{font-size: 1.4em;}
}

@media only screen and (min-width : 1160px) {
.hero__excerpt {padding: 8em; }
.hero__excerpt__title{font-size: 3.2em;}



}
</style>