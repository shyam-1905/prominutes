<template>
  <div>
      <Navbar />
      <div class="container-fluid" id="main-container">
          <div class="row">
              <div class="col-md-3" id="left-part"  style="border:3px solid"><Leftpart /></div>
              <div class="col-md-9" id="right-part" style="border:3px solid"><Rightpart /></div>
          </div>
      </div>
  </div>
  
</template>

<script>

import Navbar from '../components/Navbar.vue'
import Leftpart from './Leftpart'
import Rightpart from './Rightpart.vue'
export default {
  name: 'App',
  components: {
    Navbar,
    Leftpart,
    Rightpart
  }

}


</script>

<style src="../assets/CSS/Homepage.css">

</style>