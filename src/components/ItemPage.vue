<template>
    <div class="container">
        <div class="block is-size-3 has-text-centered ml-5">
            Item
        </div>
        <div class="columns">
            <figure class="image is-128x128">
                <img :src="item.image">
            </figure>
            <div class="column">
                {{ item.name }}<br>
                จำนวน : {{ item.left }}<br>
                ราคา : {{ item.price }} ฿<br>
                <a class="button m-1" @click="counter--">-</a>
                <div class="button m-1">{{ counter }}</div>
                <a class="button m-1" @click="counter++">+</a>
            </div>
            <div class="column">
                <br><br><br>
                <router-link to="/BasketPage" class="button m-1" @click="addToCart">
                    เพิ่มลงตะกร้าสินค้า
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import itemData from "../item.json"


export default {
    name: 'ItemPage',
    props: {
        msg: String
    },
    data() {
        return {
            counter: 1,
            cart: [],
            itemData: itemData
        }
    },
    methods: {
        addToCart() {
            this.cart.push({
                ...this.item, amount: this.counter
            })
            localStorage.setItem('cart',JSON.stringify(this.cart))
        }
    },
    computed:{
        item_id(){
        return parseInt(this.$route.params.id)
      },
      item(){
        return this.itemData.find(item => item.item_id === this.item_id)
      }
    },
    created(){
        const beforeCart = localStorage.getItem('cart')
        if(beforeCart){
            this.cart = JSON.parse(beforeCart)
        }
        console.log(this.cart)
    }
}
</script>

<style>
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";
</style>