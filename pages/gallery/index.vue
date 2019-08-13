<template>
<div class="row">
<div class="row gridSpace"></div>
<GridPaginated/>
</div>
</template>

<script>
import GridPaginated from '@/layouts/partials/grid-paginated';
export default {
  components: {
    GridPaginated
  }
}
</script>

<style>
.gridSpace{height: 50px;}
@media only screen and (min-width : 1024px) {
.gridSpace{height: 110px;}
}
</style>
