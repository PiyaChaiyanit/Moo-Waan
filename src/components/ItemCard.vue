<template>
    <div class="block container">
        <div class="block is-size-3 has-text-left ml-5">
            Hot
        </div>
        <div class="is-multiline columns">
            <div class="column is-one-quarter" v-for="(todo, index) in filerByHot" :key="index">
                <div class="card">
                    <div class="card-image">
                        <figure class="image is-1by1">
                            <img :src="todo.image">
                        </figure>
                    </div>
                    <div class="card-content">
                        <div class="media">
                            <div class="media-content">
                                <p class="title is-4">{{ todo.name }}</p>
                                <p class="has-text-left">ชนิด : {{ todo.type }}</p>
                                <p class="has-text-left">ราคา : {{ todo.price }} ฿</p>
                                <p class="has-text-left">จำนวนที่เหลือ : {{ todo.left }} </p>
                            </div>
                        </div>
                        <div class="has-text-right">
                            <router-link class="button is-rounded"
                                :to="{ name: 'SelectedItems', params: { id: todo.item_id } }">
                                Select
                            </router-link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import item from "../item.json"

export default {
    name: 'ItemCard',
    props: {
        msg: String
    },
    data() {
        return {
            item
        }
    },
    computed: {
        filerByHot() {
            return this.item.filter(item => item.hot === true)
        }
    }
}
</script>

<style>
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";
</style>