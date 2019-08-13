<template>
<div class="row">
    <div class="singles">
        <div class="singles__single">
            <div class="single__thumb">
               <img :src="this.thumb" alt="this.title" class="single__image"/>
            </div>
            <div class="single__excerpt">
                <h1>{{this.title}}</h1>
                <p><b>Published:</b> {{this.date}}</p>
                <div v-html="this.content"></div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios';
export default {

    //meta
    head () {
        return {
            title: this.title + ' | ' + 'Moment & Monuments',
            bodyAttrs: {class: 'single'},
            meta: [
            { hid: 'description', name: 'description', content: this.excerpt},
            {hid: 'og:title', name: 'og:title', content: this.title},
            {hid: 'og:description', name: 'og:description', content: this.excerpt}
            ]
        }
    },
   
    //post data
    data() {
        return {
        id: this.$route.params.id,

      //global variable set for consistent URL in main js
        posts: [],
        post: '',
        title:   '',
        thumb:   '',
        content:   '',
        date:   '',
        categoryId:   '',
        tags:   '',
        isActive: 'isActive'
        };
    },

  //post methods
  methods: {

    //get single post
    getSingle: function() {
    var self = this;
    this.id = this.$route.params.id;
    axios.get(process.env.baseUrl + '/' + this.id + '?_embed', {

    })

    .then(response => {
        this.title = response.data.title.rendered;
        this.content = response.data.content.rendered;
        this.thumb = response.data.images.large;
        this.tags = response.data.tags;
        this.date = response.data.date;
        this.categoryId = response.data.categories[0];
        console.log(response);
    })

    .catch(response => {
     console.log(response);
    });
    
    }
  },
  
  
    mounted: function () {
    this.getSingle();
    }
    

}

</script>

<style scoped>
.singles{padding: 6em 0 1em 0; }
.singles:after {content: '';display: block;clear: both;}
.singles__single{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-areas: ". excerpt excerpt excerpt excerpt excerpt excerpt excerpt excerpt excerpt excerpt excerpt excerpt excerpt ." ". thumb thumb thumb thumb thumb thumb thumb thumb thumb thumb thumb thumb thumb ." ". hr hr hr hr hr hr hr hr hr hr hr hr hr .";
    grid-template-rows: minmax(max-content, min-content);
    grid-gap: 1em;
    padding: 1em 0;
}
.single__thumb {position: relative; overflow: hidden; grid-area: thumb;}
.single__image{height: auto; width: 100%;}
.single__excerpt { grid-area: excerpt;}
.singles h1,
.singles h2,
.singles h3,
.singles h4 {
    text-align: left;
    font-size: 3em;
    line-height: 1.2em;
    letter-spacing: 2px;
    font-family: 'Playfair Display', serif;
    font-weight: 100;
    margin: 0 0 0.5em 0;
}
.singles h2,
.singles h3,
.singles h4 {font-size: 2em; font-weight: 300; font-family: 'Montserrat', sans-serif;}
.single__hr{display: block; padding: 2em 0; width: 100%; grid-area: hr;}
.singles p{color: #111; font-weight: 400; font-size: 1.2em; line-height: 1.7em; margin: 0 0 1em 0;}
.singles li{color: #111; font-weight: 400; font-size: 1.5em; line-height: 1.7em;}
.singles ul{margin: 0 0 2em 2em;}
.singles p a,
.singles li a{color: #111;}


.single__button{position: relative; display: block; height: auto; margin: 2em 0; width: 140px; }
.single__button__bdr1{stroke-dasharray: 350; stroke-dashoffset: 0; transition: all ease 0.5s;}
.single__button__bdr2{stroke-dasharray: 350; stroke-dashoffset: 350; transition: all ease 0.5s; transition-delay: 0.5s;}
.single__button__overlay{transform: translateX(-100%); transition: all ease 0.5s; transition-delay: 0.25s;}
.single__button__span{color: #fff; font-size: 1em; font-weight: 400; text-transform: uppercase; position: absolute; top: 0; left: 0; height: 100%; width: 100%; text-align: center; display: flex; align-items: center; justify-content: center;}
.single__button:hover{cursor: pointer;}
.single__button:hover .single__button__bdr1{stroke-dashoffset: 350; transition: all ease 0.5s;}
.single__button:hover .single__button__bdr2{stroke-dashoffset: 0; transition: all ease 0.5s; transition-delay: 0.5s;}
.single__button:hover .single__button__overlay{transform: translateX(100%); transition: all ease 0.5s; transition-delay: 0.25s; }

@media only screen and (min-width : 768px) {
    .singles h1 {font-size: 4.2em;}
    .singles h2,
    .singles h3,
    .singles h4 {font-size: 2.2em;}
    }

@media only screen and (min-width : 1024px) {
    .singles{padding: 12em 0 1em 0; }
    .singles__single{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
        grid-template-areas: ". thumb thumb thumb thumb thumb excerpt excerpt excerpt excerpt excerpt excerpt excerpt excerpt ." ". hr hr hr hr hr hr hr hr hr hr hr hr hr .";
        grid-gap: 4em;
        padding: 0;
    }
    .singles__single:nth-child(even){
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
        grid-template-areas: ". excerpt excerpt excerpt excerpt excerpt excerpt excerpt excerpt thumb thumb thumb thumb thumb ." ". hr hr hr hr hr hr hr hr hr hr hr hr hr .";
    }
    .single__thumb {align-self: top; justify-self: left;}
    .single__excerpt {align-self: center; justify-self: left;}
    .single__hr{padding: 0;}
    .single__button{margin: 2em 0 0 0;}
}

@media only screen and (min-width : 1140px) {
    .singles__single{
        grid-template-areas: ". . thumb thumb thumb thumb excerpt excerpt excerpt excerpt excerpt excerpt excerpt . ." ". . hr hr hr hr hr hr hr hr hr hr hr . .";
    }
    .singles__single:nth-child(even){
        grid-template-areas: ". . excerpt excerpt excerpt excerpt excerpt excerpt excerpt thumb thumb thumb thumb . ." ". . hr hr hr hr hr hr hr hr hr hr hr . .";
    }
}
</style>
