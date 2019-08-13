<template>
  <!--container-->
  <div class="container row">
    <Header/>
    <nuxt />
  </div>
  <!--container-->
</template>

<script>
import Header from './partials/header';
export default{
  components: {
    Header
  }
}
</script>

<style>
.container{min-height: 100vh;}
</style>
