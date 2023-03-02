<template>
  <div class="container">
    <div class="box has-background-primary">
      <div class="block is-size-1">
        Register
      </div>
      <div class="columns">
        <div class="column is-half">
          <p class="has-text-left is-size-5">First Name</p>
          <input class="input is-rounded is-info is-warning" name="fname" type="text" v-model="fname">
          <p class="has-text-left is-size-5">Phone</p>
          <input class="input is-rounded is-warning" name="phonenumber" type="number" v-model="phone">
        </div>
        <div class="column is-half">
          <p class="has-text-left is-size-5">Last Name</p>
          <input class="input is-rounded is-warning" name="lname" type="text" v-model="lname">
          <p class="has-text-left is-size-5">Password</p>
          <input class="input is-rounded is-warning" name="password" type="text" v-model="password">
        </div>
      </div>
      <p class="is-size-5 has-text-left">Email</p>
      <input class="input is-rounded is-warning" name="email" type="text" v-model="email"><br><br>
      <div class="control">
        <button class="button is-rounded is-warning">
          Sign Up
        </button>
      </div>
    </div>
  </div>
  
</template>
  
<script>
export default {
  name: 'SignUpPage',
  props: {
    msg: String
  },
  data() {
   
  },
  

}
</script>
  
<style>
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";
</style>
  