import axios from 'axios';
export default {
  mode: 'universal',
  transition: 'page',
  /*
  ** Headers of the page
  */
  head: {
    title: '3D Laser scanning | 3D Sculptures | Stone Monuments | Busts & Heads',
    meta: [
      { charset: 'utf-8' },
      {theme_color: '#000'},
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'We specialise in precision 3D laser scanned sculptures and monuments.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
 loading: {
  color: '#999',
  height: '5px'
},
  /*
  ** Global CSS
  */
 css: [
  '~assets/css/main.css'
],

  /*
  ** Plugins to load before mounting the App
  */
 plugins: [
  {src: '@/assets/js/main.js', ssr: false},
],
/*
  ** Set Global Api Base URL
  */
 env: {
  baseUrl: 'https://admin.3dsculptures.co.uk/wp-json/wp/v2/posts'
},

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/axios',
  ],
  /*
    ** Generate Dynamic Routes
    No need for embed param but does need per_page=100
    */
   generate: {
    routes: function () {
      return axios.get('https://admin.3dsculptures.co.uk/wp-json/wp/v2/posts?per_page=100')
      .then((res) => {
        return res.data.map((post) => {
          return '/gallery/' + post.id + '/' + post.slug
        })
      })
    }
   },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
