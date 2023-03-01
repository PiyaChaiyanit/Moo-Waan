<template>
    <div class="block">
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
                        Add to Cart
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
                        Add to Cart
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
                        Add to Cart
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
                        Add to Cart
                    </router-link>
                </div>
            </article>
        </div>
    </div>
    </div>
   
</template>

<script>
export default {
  name: 'ItemCard',
  props: {
    msg: String
  }
}
</script>

<style>
    @import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";
</style>