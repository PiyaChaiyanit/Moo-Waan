<template>
  <div class="block is-size-1">
    Welocome <br> to <br> Moo-Waan Stationery
  </div>

  <div class="block">
      <router-link to="/Shop" class="button is-rounded is-primary">
        Shop
      </router-link>
  </div>

  
</template>

<script>
export default {
  name: 'HomePage',
  props: {
    msg: String
  }
}
</script>

<style>
  @import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";
</style>