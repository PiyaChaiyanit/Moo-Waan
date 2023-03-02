<template>
  <div class="container">
    <div class="box">
      <p class="is-size-2">Login</p><br>
      <p class="is-size-5">Email</p>
      <input class="input is-rounded has-text-centered" type="emaillogin"><br><br>
      <p class="is-size-5">Password</p>
      <input class="input is-rounded has-text-centered" type="passwordlogin"><br><br>
      <router-link to="/admin" class="button is-rounded">
        Sign In
      </router-link>
    </div>
  </div>
</template>


<script>
export default {
  name: 'LoginPage',
  props: {
    msg: String
  }
}
</script>




<style>
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";
</style>