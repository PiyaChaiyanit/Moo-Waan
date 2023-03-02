
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
          <router-link to="/" class="button is-rounded is-primary">
            <strong>Home</strong>
          </router-link>
          
        </div>
      </div>
      

      <div class="navbar-item has-dropdown is-hoverable has-shadow">
        <router-link to="/Shop" class="navbar-link">
          Shop
        </router-link>

        <div class="navbar-dropdown">
          <router-link to="/write" class="navbar-item">
            เครื่องเขียน
          </router-link>
          <router-link to="/paper" class="navbar-item">
            กระดาษ
          </router-link>
          <router-link to="/tool" class="navbar-item">
            อุปกรณ์
          </router-link>
          
          <router-link to="/deco" class="navbar-item">
            ของตกแต่ง
          </router-link>
        </div>
      </div>
      <div class="navbar-item">
        <div class="buttons">
          <router-link to="/BasketPage" class="button is-rounded is-primary">
            <strong>Basket</strong>
          </router-link>
          
        </div>
      </div>
      <div class="navbar-item">
        <div class="buttons">
          <router-link to="/history" class="button is-rounded is-primary">
            <strong>History</strong>
          </router-link>
          
        </div>
      </div>
    </div>

    <div class="navbar-end">
                <div class="navbar-item has-dropdown is-hoverable has-background-primary">
                    <a class="navbar-link has-text-white">
                        Piya
                    </a>

                    <div class="navbar-dropdown is-right">
                        <a class="navbar-item">
                            Piya Chaiyanit
                        </a>
                        <hr class="navbar-divider">

                        <router-link to="/editprofile" class="navbar-item">
                            Edit Profile
                        </router-link>

                        <hr class="navbar-divider">
                        
                        <router-link to="/" class="navbar-item">
                            Log out
                        </router-link>
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