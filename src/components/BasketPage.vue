<template>
    <div class="container">
        <div class="block is-size-3 has-text-centered ml-5">
            Basket
        </div>
        <div class="block" v-for="item, index in cart" :key="item.item_id" >
            <div class="columns">
                <figure class="image is-128x128">
                    <img :src='item.image'>
                </figure>
                <div class="column">
                    {{ item.name }}<br>
                    ราคา : {{ item.price }} ฿<br>
                    คงเหลือ : {{ item.left - counter }}
                    
                </div>
                <div class="column">
                    <br><br><br>
                    <a class="button m-1" @click="counter--">-</a>
                    <div class="button m-1">{{ counter }}</div>
                    <a class="button m-1" @click="counter++">+</a>
                    <a class="button m-1" @click="delItem(index)">Delete</a>
                </div>
            </div>
        </div>
        <div class="block has-text-right">
            <div class="button m-1 is-disabled" @click="clearItem">
                
                Clear
            </div>
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
        msg: String,
    },
    data() {
        return {
            counter: 1,
            cart: []

        }
    },
    methods:{
        delItem(item) {
            this.cart.splice(item,1)
            localStorage.setItem('cart',JSON.stringify(this.cart))
        },
        clearItem() {
            localStorage.removeItem('cart')
            this.cart = []
        }
    },
    created() {
        this.cart = JSON.parse(localStorage.getItem('cart'))
    },
    watch:{
        cart(){
            localStorage.setItem('cart',JSON.stringify(this.cart))

        }
    }
}
</script>

<style>
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";
</style>