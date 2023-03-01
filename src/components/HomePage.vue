<template>
  <div class="block is-size-1">
    Welocome to <br> Moo-Waan Stationery
  </div>

  <div class="block">
      <router-link to="/SelectedItems" class="button is-rounded is-primary">
        Shop
      </router-link>
  </div>

  <div class="block is-size-3 has-text-left ml-5">
    Hot
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