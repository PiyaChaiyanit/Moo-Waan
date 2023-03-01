<template>
    <div class="block">
      <AdminNav />
    </div>
  
    <div class="block">
      <EditUserPage />
    </div>
  
    <div class="block">
      <FooterPage />
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  // import HelloWorld from '@/components/HelloWorld.vue'
  import AdminNav from '@/components/AdminNav.vue';
  import FooterPage from '@/components/FooterPage.vue';
  import EditUserPage from '@/components/EditUserPage.vue';
  
  
  export default {
    name: 'PaymentView',
    components: {
      // HelloWorld,
      AdminNav,
      FooterPage,
      EditUserPage
  }
  }
  </script>
  
  <style>
    @import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";
  </style>
  