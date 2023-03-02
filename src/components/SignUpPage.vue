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
          <p class="has-text-left is-size-5">Password</p>
          <input class="input is-rounded is-warning" name="password" type="password" v-model="password">
        </div>
        <div class="column is-half">
          <p class="has-text-left is-size-5">Last Name</p>
          <input class="input is-rounded is-warning" name="lname" type="text" v-model="lname">
          <p class="has-text-left is-size-5">Confirm Password </p>
          <input class="input is-rounded is-warning" name="password" type="password" v-model="confirm_password">
        </div>
      </div>
      <p class="is-size-5 has-text-left">Email</p>
      <input class="input is-rounded is-warning" name="email" type="text" v-model="email"><br><br>
      <div class="control">
        <button class="button is-rounded is-warning" @click="register">
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
    return {
      fname: '',
      lname: '',
      phone: '',
      email: '',
      password: '',
      confirm_password: '',
      accounts: [],
    }
  },
  methods: {
    register(){
      const existingAccount = this.accounts.find(account => {
          return account.email === this.email;
        })
        if(existingAccount){
          alert('email already exist')
        } else if (this.password !== this.confirm_password){
          alert('password not match')
        } else {
          const newAcount = {
            id: this.accounts.length + 1,
            fname: this.fname,
            lname: this.lname,
            phone: this.phone,
            email: this.email,
            password: this.password,
            
          }
          alert("Success")
          console.log(newAcount)
          this.accounts.push(newAcount)
          localStorage.setItem('accounts', JSON.stringify(this.accounts))
          this.$router.push('/')

       }
    }
  },
  created(){
    const getAccounts = localStorage.getItem('accounts')
    if(getAccounts){
      this.accounts = JSON.parse(getAccounts)
    }
  }
}
</script>
  
<style>
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";
</style>
  