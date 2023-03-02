<template>
  <div class="container">
    <div class="box">
      <p class="is-size-2">Login</p><br>
      <p class="is-size-5">Email</p>
      <input class="input is-rounded has-text-centered" type="email" v-model="email"><br><br>
      <p class="is-size-5">Password</p>
      <input class="input is-rounded has-text-centered" type="password" v-model="password"><br><br>
      <button class="button is-rounded" @click="checklogin()">
        Sign In
      </button>
    </div>
  </div>
</template>


<script>


export default {
  name: 'LoginPage',
  props: {
    msg: String
  },
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    checklogin() {
      if (this.email === "admin@moowaan.com" && this.password === "admin123") {
        this.$router.push('/admin')
      }
      else if(this.email === "" || this.password === "") {
        alert('please input every box')
      }
      else {
        alert('Incorrect email or password')
      }
    }
  }
}




</script>




<style>
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";
</style>