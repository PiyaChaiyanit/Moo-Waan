<template>
  <div class="container">
    <div class="box">
      <p class="is-size-2">Login</p><br>
      <p class="is-size-5">Email</p>
      <input class="input is-rounded has-text-centered" type="email" v-model="email"><br><br>
      <p class="is-size-5">Password</p>
      <input class="input is-rounded has-text-centered" type="password" v-model="password"><br><br>
      <button class="button is-rounded" @click="login">
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
      password: '',
      login_status: null,
      account: []
    }
  },
  methods: {
      login(){
        const existingAccount = this.accounts.find(account => {
          return account.email === this.email;
        });
        if(existingAccount){
          if(existingAccount.password === this.password){
            this.login_status = true
            localStorage.setItem('login_status', this.login_status)
            localStorage.setItem('signedInAccount', JSON.stringify(existingAccount))
            this.$router.push('/user')
          } else {
            alert('password wrong')
          }
        } else {
          alert('email not found')
        }
      }
    },
    created() {
      const accountData = localStorage.getItem('accounts');
      if (accountData) {
        this.accounts = JSON.parse(accountData);
      }
    }
}




</script>




<style>
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";
</style>