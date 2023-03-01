<template>
  <div class="block is-size-1 has-text-centered">
    Login
  </div>

  <div class="block">
    <p>Email</p> <br>
    <input class="input is-rounded" type="text" placeholder="Email"> <br>
  </div>
  <div class="block">
    <p>Password</p> <br>
    <input class="input is-rounded" type="text" placeholder="Password"> <br>
  </div>


  <div class="block has-text-centered">
  <router-link to="/admin" class="button is-rounded">
        Login
  </router-link>
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