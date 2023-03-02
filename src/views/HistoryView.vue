<template>
    <div class="block">
        <NavBar />
    </div>

    <div class="block">
        <HistoryPage />
    </div>

    <div class="block">
        <FooterPage />
    </div>

</template>

<script>
import NavBar from '@/components/NavBar.vue';
import FooterPage from '@/components/FooterPage.vue';
import HistoryPage from '@/components/HistoryPage.vue';

export default {
    name: "HistoryView",
    props: {
        msg: String
    },
    components: {
    NavBar,
    FooterPage,
    HistoryPage
}
}
</script>

<style>
    @import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";
</style>