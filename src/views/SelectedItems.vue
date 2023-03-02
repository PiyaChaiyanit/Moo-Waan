<template>
  <div class="block">
    <NavBar />
  </div>

  <div class="block">
    <ItemPage />
  </div>

  <div class="block">
    <FooterPage />
  </div>
</template>
  
<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import NavBar from '@/components/NavBar.vue';
import FooterPage from '@/components/FooterPage.vue';
import ItemPage from '@/components/ItemPage.vue';


export default {
  name: 'SelectedItems',
  components: {
    // HelloWorld,
    NavBar,
    FooterPage,
    ItemPage
  }
}
</script>
  
<style>
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";
</style>
  