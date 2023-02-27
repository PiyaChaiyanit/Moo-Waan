
<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
    </a>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-rounded is-primary">
            <strong>Home</strong>
          </a>
          
        </div>
      </div>
      

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          Shop
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
            เครื่องเขียน
          </a>
          <a class="navbar-item">
            กระดาษ
          </a>
          <a class="navbar-item">
            อุปกรณ์
          </a>
          
          <a class="navbar-item">
            ของตกแต่ง
          </a>
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-rounded is-primary">
            <strong>Sign up</strong>
          </a>
          <a class="button is-rounded is-primary">
            Log in
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>


</template>

<script>
export default {
  name: 'NavBar',
  props: {
    msg: String
  }
}
</script>


<style>
    @import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";
</style>