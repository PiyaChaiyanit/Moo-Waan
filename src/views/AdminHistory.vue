<template>
    <div class="block">
        <AdminNav />
    </div>

    <div class="home">
        <div class="container">
            <div class="box">
                <p class="has-text-left m-2 is-size-2">Order History</p>
                <div class="columns">
                    <div class="input">
                        <div class="column">
                            <p>Order</p>
                        </div>
                        <div class="column">
                            <p>Placed</p>
                        </div>
                        <div class="column">
                            <p>Name</p>
                        </div>
                        <div class="column">
                            <p>Status</p>
                        </div>
                        <div class="column">
                            <p>Cost</p>
                        </div>
                        <div class="column">
                            <p>Check</p>
                        </div>
                    </div>
                </div>
                <div class="input">
                    <div class="column">
                        <p>1</p>
                    </div>
                    <div class="column">
                        <p>23/2/2566</p>
                    </div>
                    <div class="column">
                        <p>Piya</p>
                    </div>
                    <div class="column">
                        <p>{{ status }}</p>
                    </div>
                    <div class="column">
                        <p>50 ฿</p>
                    </div>
                    <div class="column">
                        <div class="column">
                            <div class="button is-rounded m-1" @click="status = 'Not Complete'">
                                ❌
                            </div>
                            <div class="button is-rounded m-1" @click="status = 'Complete'">
                                ✔️
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="block">
        <ItemCard />
    </div>


    <div class="block">
        <FooterPage />
    </div>
</template>
    
<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import AdminNav from '@/components/AdminNav.vue';

import ItemCard from '@/components/ItemCard.vue';
import FooterPage from '@/components/FooterPage.vue';




export default {
    name: 'HomeView',
    components: {
        // HelloWorld,
        AdminNav,
     
        ItemCard,
        FooterPage,

    },
    data() {
        return {
            status: 'Not Complete'
        }
    }
}
</script>
    
<style>
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";
</style>