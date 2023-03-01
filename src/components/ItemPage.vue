<template>
    <div class="container">
        <div class="block">
            Item
        </div>
        <div class="columns">
            <figure class="image is-128x128">
                <img src="https://bulma.io/images/placeholders/128x128.png">
            </figure>
            <div class="column">
                ปากกา Pentel<br>
                ปากหมึกซึมสีน้ำเงิน<br>
                50 ฿<br>
                <div class="button m-1">
                    -
                </div>
                <div class="button m-1">
                    1
                </div>
                <div class="button m-1">
                    +
                </div>
            </div>
            <div class="column">
                <br><br><br>
                <router-link to="/BasketPage" class="button m-1">
                    เพิ่มลงตะกร้าสินค้า
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ItemPage',
    props: {
        msg: String
    }
}
</script>

<style>
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";
</style>