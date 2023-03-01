<template>
  <div class="block">
    <NavBar />
  </div>

  <div class="home">
    <HomePage />
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>

  <div class="block">
    <ItemCard />
  </div>

  <div class="block">
    <ItemPage />
  </div>

  <div class="block">
    <BasketPage />
  </div>

  <div class="block">
    <FooterPage />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import NavBar from '@/components/NavBar.vue';
import HomePage from '@/components/HomePage.vue';
import ItemCard from '@/components/ItemCard.vue';
import FooterPage from '@/components/FooterPage.vue';
import ItemPage from '@/components/ItemPage.vue';
import BasketPage from '@/components/BasketPage.vue';


export default {
  name: 'HomeView',
  components: {
    // HelloWorld,
    NavBar,
    HomePage,
    ItemCard,
    FooterPage,
    ItemPage,
    BasketPage
}
}
</script>

<style>
  @import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";
</style>
