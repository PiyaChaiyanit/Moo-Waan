<template>
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
    <SignUpPage />
  </div>
  
  <div>
    <ChangeInformation />
  </div>
  
  <div>
    <PaymentPage />
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
import SignUpPage from './components/SignUpPage.vue';
import ChangeInformation from './components/ChangeInformation.vue';
import PaymentPage from './components/PaymentPage.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    NavBar,
    HomePage,
    ItemCard,
    SignUpPage,
    ChangeInformation,
    PaymentPage
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
