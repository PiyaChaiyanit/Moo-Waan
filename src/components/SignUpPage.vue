<template>
    <div class="block is-size-1 has-text-centered">
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
    </router-link>
  </div>
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
  