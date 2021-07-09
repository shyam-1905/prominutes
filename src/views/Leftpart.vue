<template>
  <div>
      <div class="searchbox">
        <input type="text" name="fruit" list="members" autocomplete="off" id="leftsearch" placeholder="Type to select and Send ivites"/>
        <datalist id="members">
          <option>Sindhu</option>
          <option>Ramesh</option>
          <option>vishal</option>
          <option>DP</option>
        </datalist>
      </div>
      <div class="addmemberbox">
        <div class="textfields">
        <input type="text" placeholder="Firstname" id="addmemberinput">
        <input type="text" placeholder="Lastname" id="addmemberinput">
        </div>
        <input type="email" placeholder="Email" id="addmemberinputemail">
        <button id="addbutton">Add to Meeting</button>
      </div>
      <h3 class="participantstext">Participants</h3>
      <div class="participantsbox">
          <table>
            <tr id="participantsrow">
              <th>
                Name
              </th>
              <th>
                Attende
              </th>
            </tr>
            <tr id="participantdata">
              <td>Sindhu</td>
              <td><input type="checkbox"></td>
            </tr>
            <tr id="participantdata">
              <td>Sindhu</td>
              <td><input type="checkbox"></td>
            </tr>
            <tr id="participantdata">
              <td>Sindhu</td>
              <td><input type="checkbox"></td>
            </tr>
          </table>
      </div>
  </div>
</template>

<script>
export default {
name:'Leftpart',
}
</script>

<style src="../assets/CSS/Leftpart.css">

</style>