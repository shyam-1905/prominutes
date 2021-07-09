<template>
  <div>
      <div class="container-fluid" id="right-cont">
          <div class="row">
              <div class="col-md-8">
                  <div>
                      <h3>Instant Meeting - {{currentTime}}</h3>
                      <span>{{currentDayYearTime}}</span>
                   </div>
              </div>
              <div class="col-md-4">
                <div class="search-box-container">
                    <span class="fa fa-search form-control-feedback"></span>
                    <input type="text" class="form-control" placeholder="Search">
               </div>
              </div>
          </div>
          <div class="row" id="optionalobjective">
              <p>Optional- Add your Objective</p>
          </div>
          <div class="row" id="tabs-row">
                <div>
                    <b-tabs
                        active-nav-item-class="font-weight-bold bg-info"
                        content-class="mt-3" text-light id="btabs" >
                        <b-tab title="Minutes" active>
                           <Addagenda :showModal="showModal"/> 
                        </b-tab>
                        <b-tab title="Actions"><p>I'm the second tab</p></b-tab>
                        <b-tab title="Risk"><p>I'm the second tab</p></b-tab>
                        <b-tab title="Change Request"><p>I'm the second tab</p></b-tab>
                        <b-tab title="Issues"><p>I'm the second tab</p></b-tab>
                        <b-tab title="Decisions"><p>I'm the second tab</p></b-tab>
                       
                    </b-tabs>
                </div>
          </div>
          
      </div>
      <div class="footer">
               <button @click="toggleModal">
                  <b-icon icon="plus-circle-fill"></b-icon> Add Agenda
               </button>
          </div>
  </div>
  
</template>

<script src="../assets/JS/Rightpart.js" >


</script>

<style src="../assets/CSS/Rightpart.css">

</style>