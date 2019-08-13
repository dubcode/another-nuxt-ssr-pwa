<template>
<div class="row">

    <div class="model" v-for="item in items" :key="item.id">
        <div class="model__viewer">
          <model-obj v-on:on-load="onLoad(item)" v-bind:src="item.model" v-bind:background-color="item.bgColor" v-bind:background-alpha="item.bgAlpha"  v-bind:rotation="item.rotation" v-bind:scale="item.scale" v-bind:position="item.position" v-bind:key="item.id"></model-obj>
        </div>
        <div class="model__excerpt">
          <h1 v-html="item.title" class="model__excerpt__title"></h1>
          <div v-html="item.excerpt" class="model__excerpt__content"></div>
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
            title: 'First title',
            excerpt: '<p>Even with all the new technology the world has to offer, since the dawn of mankind the greatest method to preserve human memory has always been to set them in stone.</p><p>At M&M we embrace technology to further improve that age old method of preserving memories in stone by improving on it with high precision 3D laser scanning and robotic sculpting technology.</p>',
            model: 'https://projects.danielwakefield.co.uk/moments-monuments/head15.obj', 
            material: 'https://projects.danielwakefield.co.uk/moments-monuments/head15.mtl',
            bgColor: '#fff', 
            bgAlpha: 0, 
            rotation: {x: 0, y:0, z: 0},
            scale: {x: 1, y:1, z: 1},
            position: {x: 0, y:0, z: 0}
        },
        {
            id: 2,
            title: 'Another title',
            excerpt: '<p>Even with all the new technology the world has to offer, since the dawn of mankind the greatest method to preserve human memory has always been to set them in stone.</p><p>At M&M we embrace technology to further improve that age old method of preserving memories in stone by improving on it with high precision 3D laser scanning and robotic sculpting technology.</p>',
            model: 'https://projects.danielwakefield.co.uk/moments-monuments/man2.obj', 
            material: 'https://projects.danielwakefield.co.uk/moments-monuments/man2.mtl', 
            bgColor: '#222', 
            bgAlpha: 0, 
            rotation: {x: 0, y:0, z: 0},
            scale: {x: 1, y:1, z: 1},
            position: {x: 0, y:0, z: 0}
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
.model {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas: "model__viewer" "model__excerpt";
  height:100vh;
  overflow: hidden;
}

.model:nth-child(2n) {
  display: grid;
   grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas: "model__excerpt model__viewer";
}

.model__viewer {background: #eaeaea; grid-area: model__viewer; position: relative;}
.model__excerpt {padding: 4em; grid-area: model__excerpt;align-self: center;justify-self: left;}

.model__excerpt__title{color: #b0952a; font-weight:100; font-size: 2.2em; line-height: 1.1em; margin: 0 0 0.5em 0; text-transform: uppercase;}
.model__excerpt__content{color: #222;font-family: 'Montserrat', sans-serif; font-weight: 100; font-size: 1.2em; line-height: 1.5em; margin: 0 0 1em 0;}

@media only screen and (min-width : 1024px) {
  .model__excerpt {padding: 8em; }
.model__excerpt__content p{font-size: 1.4em;}
}

@media only screen and (min-width : 1160px) {
.model__excerpt__title{font-size: 3.2em;}

.model {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: "model__viewer model__excerpt";
  height:100vh;
  overflow: hidden;
}

.model:nth-child(2n) {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: "model__excerpt model__viewer";
}

}
</style>