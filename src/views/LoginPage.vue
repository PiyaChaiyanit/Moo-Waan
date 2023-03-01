<template>
    <div class="block">
        <NavBar />
    </div>

    <div class="block">
        <Login />
    </div>

    <div class="block">
        <ItemCard />
    </div>

    <div class="block">
        <FooterPage />
    </div>
</template>

<script>
    import NavBar from '@/components/NavBar.vue';
    import Login from '@/components/Login.vue';
    import ItemCard from '@/components/ItemCard.vue';
    import FooterPage from '@/components/FooterPage.vue';


export default {
  name: 'LoginPage',
  components: {

    NavBar,
    Login,
    ItemCard,
    FooterPage
  }
}


</script>

<style>
    @import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";
</style>