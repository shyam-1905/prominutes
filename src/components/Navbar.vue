<template>
<div>
  <b-navbar toggleable="lg" type="dark" variant="primary" id="navbar">
   <b-button size="sm" class="my-2 my-sm-0" variant="light" id="pro-button">PRO</b-button>
    <b-navbar-brand href="#" id="navbar-brand">Minutes</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

     
      

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto" id="navbar-nav">
        

        <b-avatar variant="info" src="https://placekitten.com/300/300" class="mr-3"></b-avatar>
       
        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <strong>Hi Sindhu</strong>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    
  </b-navbar>
</div>
</template>
<script>


export default{
    name:"Navbar"
}
    
</script>
<style scoped src="../assets/CSS/Navbar.css">

</style>