<template>
    <div class="block">
      <NavBar />
    </div>
  
    <div class="block">
      <PaymentPage />
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
  import PaymentPage from '@/components/PaymentPage.vue';
  
  
  export default {
    name: 'PaymentView',
    components: {
      // HelloWorld,
      NavBar,
      FooterPage,
      PaymentPage
  }
  }
  </script>
  
  <style>
    @import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";
  </style>
  