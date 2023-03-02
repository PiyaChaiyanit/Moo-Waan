<template>
    <div class="block is-size-1 has-text-centered">
        Change Information
    </div>
  
    <div class="block">
        <p>First name</p> <br>
        <input class="input is-rounded" type="text" v-model="fname" placeholder="fname"> <br>
    </div>
    <div class="block">
        <p>Last name</p> <br>
        <input class="input is-rounded" type="text" v-model="lname" placeholder="lname"> <br>
    </div>
    <div class="block">
        <p>Phone</p> <br>
        <input class="input is-rounded" type="number" v-model="phone" placeholder="phone"> <br>
    </div>
    <div class="block">
        <p>Email</p> <br>
        <input class="input is-rounded" type="email" v-model="email" placeholder="email"> <br>
    </div>
    <div class="block">
        <p>Password</p> <br>
        <input class="input is-rounded" type="password" v-model="password" placeholder="password"> <br>
    </div>
    <div class="block">
        <p>Confirm Password</p> <br>
        <input class="input is-rounded" type="password" v-model="confirm" placeholder="confirm"> <br>
    </div>

    <div class="block has-text-centered">
        <router-link to="" class="button is-rounded" @click="checkChange">
            Save
        </router-link>
    </div>
  </template>
  
  <script>


  export default {
    name: 'ChangeInformation',
    props: {
      msg: String
    },
    data() {
        return {
            fname: '',
            lname: '',
            phone: '',
            email: '',
            password: '',
            confirm: ''
        }
    },
    methods: {
        checkChange() {
            if (this.fname === "" || this.lname === "" || this.phone === "" || this.email === "" || this.password === "" || this.confirm === "") {
                alert("Please input every box")
            }
            else if(this.password != this.confirm) {
                alert("Password Incorrect")
            }
            else {
                alert("Success")
                this.$router.push("/user")
            }
        }
    }

  }
  </script>
  
  <style>
  @import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";
  </style>
  