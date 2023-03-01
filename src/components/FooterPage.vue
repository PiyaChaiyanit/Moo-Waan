<template>
  <footer class="footer">
    <!-- Copyright symbol of company -->
    <div class="content has-text-left has-text-weight-bold is-size-3">
      <p>Moo - Waan Contact</p>

    </div>

    <!-- Three columns created using columns class of Bulma -->
    <div class="columns">
      <!-- Column 1 -->
      <div class="column">

        <!-- Heading is left aligned, medium weight -->
        <h4 class="bd-footer-title 
                   has-text-weight-medium
                   has-text-left
                   is-size-4">
          Moo - Waan Location
        </h4>
        <br>
        <!-- footer content -->
        <p class="bd-footer-link 
                  has-text-left">
          31/256 หมู่บ้านรินทร์ทอง รามคำแหง 190
        
          แขวงมีนบุรี เขตมีนบุรี กรุงเทพฯ 10510
        </p>

      </div>


      <!-- <div class="column">
      <h4 class="bd-footer-title 
                 has-text-weight-medium 
                 has-text-justify">
        Explore
      </h4>
  
      
      <p class="bd-footer-link">
         <a href="https://">
          <span class="icon-text">
            <span>Practice</span>
          </span>
         </a>
          <br />
          <a href="https://">
              <span class="icon-text">
                <span>Blogs</span>
              </span>
            </a>
          <br />
          <a href="https://">
              <span class="icon-text">
                <span>Careers</span>
              </span>
          </a>
      </p>
  
    </div> -->

      <!-- Column 3 -->
      <div class="column ">
        <h4 class="bd-footer-title
                   has-text-weight-medium
                   has-text-justify
                   is-size-4">
          Contact us
        </h4>
        <br>
        <!-- Column 3 lists with links -->
        <p class="bd-footer-link">
          Tel : 02 - 916 - 4768
        </p>

      </div>
    </div>
  </footer>
</template>
  
  
<script>
export default {
  name: 'FooterPage',
  props: {
    msg: String
  }
}
</script>
  
<style>
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";
</style>