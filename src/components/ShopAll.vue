<template>
    <div class="block is-size-1 has-text-centered">
        All Item
    </div>

    <div class="tile is-ancestor column">
        <div class="tile is-parent">
            <article class="tile is-child box">
                <figure class="image is-4by3">
                    <img src="https://bulma.io/images/placeholders/640x480.png">
                </figure>
                <br>
                <p class="is-size-5">gay</p>
                <br>
                <p class="has-text-left">{{ item[0].name}}</p>
                <p class="has-text-left">ราคา : 50 ฿</p>
                <br>
                <div class="has-text-right">
                    <router-link to="/SelectedItems" class="button is-rounded">
                        Select
                    </router-link>
                </div>
            </article>
        </div>
        <div class="tile is-parent">
            <article class="tile is-child box">
                <figure class="image is-4by3">
                    <img src="https://bulma.io/images/placeholders/640x480.png">
                </figure>
                <br>
                <p class="is-size-5">gay</p>
                <br>
                <p class="has-text-left">ปากกาสีน้ำเงิน</p>
                <p class="has-text-left">ราคา : 50 ฿</p>
                <br>
                <div class="has-text-right">
                    <router-link to="/SelectedItems" class="button is-rounded">
                        Select
                    </router-link>
                </div>
            </article>
        </div>
        
        <div class="tile is-parent">
            <article class="tile is-child box">
                
                <figure class="image is-4by3">
                    <img src="https://bulma.io/images/placeholders/640x480.png">
                </figure>
                <br>
                <p class="is-size-5">gay</p>
                <br>
                <p class="has-text-left">ปากกาสีน้ำเงิน</p>
                <p class="has-text-left">ราคา : 50 ฿</p>
                <br>
                <div class="has-text-right">
                    <router-link to="/SelectedItems" class="button is-rounded">
                        Select
                    </router-link>
                </div>
            </article>
        </div>
        <div class="tile is-parent">
            <article class="tile is-child box">
                <figure class="image is-4by3">
                    <img src="https://bulma.io/images/placeholders/640x480.png">
                </figure>
                <br>
                <p class="is-size-5">gay</p>
                <br>
                <p class="has-text-left">ปากกาสีน้ำเงิน</p>
                <p class="has-text-left">ราคา : 50 ฿</p>
                <br>
                <div class="has-text-right">
                    <router-link to="/SelectedItems" class="button is-rounded">
                        Select
                    </router-link>
                </div>
            </article>
        </div>
    </div>

    <div class="tile is-ancestor">
        <div class="tile is-parent">
            <article class="tile is-child box">
                <figure class="image is-4by3">
                    <img src="https://bulma.io/images/placeholders/640x480.png">
                </figure>
                <br>
                <p class="is-size-5">gay</p>
                <br>
                <p class="has-text-left">ปากกาสีน้ำเงิน</p>
                <p class="has-text-left">ราคา : 50 ฿</p>
                <br>
                <div class="has-text-right">
                    <router-link to="/SelectedItems" class="button is-rounded">
                        Select
                    </router-link>
                </div>
            </article>
        </div>
        <div class="tile is-parent">
            <article class="tile is-child box">
                <figure class="image is-4by3">
                    <img src="https://bulma.io/images/placeholders/640x480.png">
                </figure>
                <br>
                <p class="is-size-5">gay</p>
                <br>
                <p class="has-text-left">ปากกาสีน้ำเงิน</p>
                <p class="has-text-left">ราคา : 50 ฿</p>
                <br>
                <div class="has-text-right">
                    <router-link to="/SelectedItems" class="button is-rounded">
                        Select
                    </router-link>
                </div>
            </article>
        </div>
        <div class="tile is-parent">
            <article class="tile is-child box">
                
                <figure class="image is-4by3">
                    <img src="https://bulma.io/images/placeholders/640x480.png">
                </figure>
                <br>
                <p class="is-size-5">gay</p>
                <br>
                <p class="has-text-left">ปากกาสีน้ำเงิน</p>
                <p class="has-text-left">ราคา : 50 ฿</p>
                <br>
                <div class="has-text-right">
                    <router-link to="/SelectedItems" class="button is-rounded">
                        Select
                    </router-link>
                </div>
            </article>
        </div>
        <div class="tile is-parent">
            <article class="tile is-child box">
                <figure class="image is-4by3">
                    <img src="https://bulma.io/images/placeholders/640x480.png">
                </figure>
                <br>
                <p class="is-size-5">gay</p>
                <br>
                <p class="has-text-left">ปากกาสีน้ำเงิน</p>
                <p class="has-text-left">ราคา : 50 ฿</p>
                <br>
                <div class="has-text-right">
                    <router-link to="/SelectedItems" class="button is-rounded">
                        Select
                    </router-link>
                </div>
            </article>
        </div>
    </div>
</template>

<script>
import item from "../item.json"



export default {
    name: 'SignUpPage',
    props: {
        msg: String
    },
    data() {
        return {
            item
        }
    }
}


</script>

<style>
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";
</style>