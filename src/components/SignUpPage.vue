<template>
  <div class="block">
    Register
  </div>

  <div class="field">
    <p>First Name
      <input class="input" type="firstname">
    </p>
    <p>Last Name
      <input class="input" type="lastname">
    </p>
    <p>Phone
      <input class="input" type="phone">
    </p>
    <p>Password
      <input class="input" type="password">
    </p>
    <p> Email
      <input class="input" type="email">
    </p>
  </div>

  <div class="block">
      <div class="button is-rounded is-primary">
        Sign Up
      </div>
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