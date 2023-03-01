<template>
  <div class="container">
    <div class="box has-background-primary">
      <div class="block is-size-1">
        Register
      </div>
      <div class="columns">
        <div class="column is-half">
          <p class="has-text-left is-size-5">First Name</p>
          <input class="input is-rounded is-info is-warning" type="fname">
          <p class="has-text-left is-size-5">Phone</p>
          <input class="input is-rounded is-warning" type="phonenumber">
        </div>
        <div class="column is-half">
          <p class="has-text-left is-size-5">Last Name</p>
          <input class="input is-rounded is-warning" type="lname">
          <p class="has-text-left is-size-5">Password</p>
          <input class="input is-rounded is-warning" type="password">
        </div>
      </div>
      <p class="is-size-5 has-text-left">Email</p>
      <input class="input is-rounded is-warning" type="email"><br><br>
      <div class="control">
        <button class="button is-rounded is-warning">
          Sign Up
        </button>
      </div>
    </div>
  </div>
  <!-- <div class="block is-size-1 has-text-centered">
      Register
    </div>
  
    <div class="block">
        <p>First name</p> <br>
        <input class="input is-rounded" type="text" placeholder="Name"> <br>
    </div>
    <div class="block">
        <p>Last name</p> <br>
        <input class="input is-rounded" type="text" placeholder="LastName"> <br>
    </div>
    <div class="block">
        <p>Phone</p> <br>
        <input class="input is-rounded" type="text" placeholder="Phone"> <br>
    </div>
    <div class="block">
        <p>Password</p> <br>
        <input class="input is-rounded" type="text" placeholder="Password"> <br>
    </div>
    <div class="block">
        <p>Email</p> <br>
        <input class="input is-rounded" type="text" placeholder="Email"> <br>
    </div>

  <div class="block has-text-centered">
    <router-link to="/" class="button is-rounded">
        Sign Up
    </button>
  </div> -->
</template>
  
<script>
export default {
  name: 'SignUpPage',
  props: {
    msg: String
  }
}
</script>
  
<style>
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";
</style>
  