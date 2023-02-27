<template class="">
  <div class="block">
    <NavBar />
  </div>
  
  <div class="block has-text-centered">
    <HomePage />
  </div>
  <div class="block">
    <ItemCard />

  </div>
  
  
  
  <div>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
  
  
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import NavBar from './components/NavBar.vue';
import HomePage from './components/HomePage.vue';
import ItemCard from './components/ItemCard.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    NavBar,
    HomePage,
    ItemCard
  },
}





</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */

</style>
