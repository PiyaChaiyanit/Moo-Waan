<template>
    <div class="container">
        <div class="block is-size-3 has-text-centered ml-5">
            Basket
        </div>
        <div class="columns">
            <figure class="image is-128x128">
                <img src="https://bulma.io/images/placeholders/128x128.png">
            </figure>
            <div class="column">
                ปากกา Pentel<br>
                ปากหมึกซึมสีน้ำเงิน<br>
                50 ฿
            </div>
            <div class="column">
                <br><br><br>
                <a class="button m-1" @click="counter--">-</a>
                <div class="button m-1">{{ counter }}</div>
                <a class="button m-1" @click="counter++">+</a>
            </div>
        </div>
        <div class="block has-text-right">
            <div class="button m-1 is-disabled">
                ราคารวม: 50 ฿
            </div>
            <router-link to="/Payment" class="button m-1">
                ชำระเงิน
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BasketPage',
    props: {
        msg: String
    },
    data() {
        return {
            counter: 1
        }
    }   
}
</script>

<style>
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";
</style>