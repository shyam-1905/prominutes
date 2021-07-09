<?php 
    $conn = new mysqli("localhost","root","","prominutes");
    if($conn->connect_error){
        die("connection failed".$conn->connect_error);
    }
    $result = array('error' => false);
    $action = '';
    if(isset($_GET['action'])){
        $action = $_GET['action'];
    }
    if($action == 'read'){
        $sql = $conn->query("SELECT * FROM types");
        $types = array();
        while($row - $sql->fetch_assoc()){
            array_push($types,$row);
        }
        $result['types'] = $types;
    }
    if($action == 'create'){
        $agendaname = $_POST['agendaname'];
        $minutestype = $_POST['minutestype'];
        $priority = $_POST['priority'];
        $assigndate = $_POST['assigndate'];
        $assigne = $_POST['assigne'];
        $minutesdesc = $_POST['minutesdesc'];
        
    $sql = $conn->query("INSERT INTO types (agendaname,priority,minutestype,assigndate,assigne,minutesdesc) VALUES('$agendaname','$minutestype','$assigne','$priority','$minutesdesc','$assigndate')");
      if($sql){
          $result['message'] = "user added successfully";
      } 
      else{
          $result['error'] = true;
          $result['message'] = "failed to add user";
      } 
    }

    if($action == 'update'){
        $id = $_POST['id'];
        $agendaname = $_POST['agendaname'];
        $minutestype = $_POST['minutestype'];
        $priority = $_POST['priority'];
        $assigndate = $_POST['assigndate'];
        $assigne = $_POST['assigne'];
        $minutesdesc = $_POST['minutesdesc'];
        
    $sql = $conn->query("UPDATE types SET agendaname='$agendaname',priority='$priority',minutestype='$minutestype',assigndate='$assigndate',assigne='$assigne',minutesdesc='$minutesdesc' WHERE id='$id'");
      if($sql){
          $result['message'] = "user updated successfully";
      } 
      else{
          $result['error'] = true;
          $result['message'] = "failed to update user";
      } 
    }
    if($action == 'delete'){
        $id = $_POST['id'];
        
        
    $sql = $conn->query("DELETE FROM types WHERE id='$id'");
      if($sql){
          $result['message'] = "user DELETED successfully";
      } 
      else{
          $result['error'] = true;
          $result['message'] = "failed to DELETED user";
      } 
    }
    $conn->close;
    ?>