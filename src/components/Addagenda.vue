<template>
   <div id="details">
    <table>
        <tr id="tablehead" v-for="type in types" :key="type.id">
        <th>
             <div class="thead">
                <img src="../assets/Images/main reorder.svg" alt="">
                <span>{{type.id}}</span>
                <input type="input" class="form__field" name="name" id='name' v-model="type.agendaname" required />
                     <b-icon icon="trash-fill" aria-hidden="true" id="del" @click=" showDeleteModal=true;selectUser(type)"></b-icon>
            </div> 
        </th>
        </tr>
        <tr>
            <td id="tdata">
                <img src="../assets/Images/Inner reorder.svg" alt="">
                
                <input type="input" class="form__field" placeholder="My First Agenda Here" name="name" id='name' required />
                    <select name="type" id="type" @change="changetype()" v-model="typevalue">
                        <option value="Notes">Notes</option>
                        <option value="Issues">Issues</option>
                        <option value="Action">Action</option>
                    </select>
                    
                        
                        <select name="type" id="type" v-if="isAction">
                        <option value="Notes">Sindhu</option>
                        <option value="Issues">Ramesh</option>
                        <option value="Action">Dp</option>
                       </select>
                       <input type="date" v-if="isAction">
                    
                    <b-icon icon="trash-fill" aria-hidden="true" id="del"></b-icon>
            </td>
        </tr>
        <tr>
               <td id="tdata">
                <img src="../assets/Images/Inner reorder.svg" alt="">
                
                <input type="input" class="form__field" placeholder="My First Agenda Here" name="name" id='name' required />
                    <select name="type" id="type">
                        <option value="Notes">Notes</option>
                        <option value="Issues">Issues</option>
                        <option value="Action">Action</option>
                    </select>
                    <b-icon icon="trash-fill" aria-hidden="true" id="del"></b-icon>
            </td>
        </tr>

        <tr id="tablehead">
        <th >
             <div class="thead">
                <img src="../assets/Images/main reorder.svg" alt="">
                <span>2</span>
                <input type="input" class="form__field" name="name" id='name' required />
                    <b-icon icon="trash-fill" aria-hidden="true" id="del" @click=" showDeleteModal=true;selectUser()"></b-icon>
            </div> 
            
        </th>
        </tr>
        <tr>
            <td id="tdata">
                <img src="../assets/Images/Inner reorder.svg" alt="">
                
                <input type="input" class="form__field" placeholder="My First Agenda Here" name="name" id='name' required />
                    <select name="type" id="type">
                        <option value="Notes">Notes</option>
                        <option value="Issues">Issues</option>
                        <option value="Action">Action</option>
                    </select>
            </td>
        </tr>
        
        
    </table>
    <!-- modal -->

<div id="overlay" v-if="showModal">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Add new Agenda</h5>
                <button type="button" class="close" @click="showModal=false">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body p-4">
                <form action="#" method="post">
                    <div class="form-group">
                        <input type="text" name="agendaname" class="form-control form-control-lg" placeholder="agenda name" v-model="newtypes.agendaname">
                    </div>
                    <div class="form-group">
                        <button class="btn btn-info btn-block btn-lg" @click="showModal=false; addUser()">Add Agenda</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

<!--delete -->
<div id="overlay" v-if="showDeleteModal">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Add new Agenda</h5>
                <button type="button" class="close" @click="showDeleteModal=false">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body p-4">
                <form action="#" method="post">
                    <div class="form-group">
                        <button class="btn btn-info btn-block btn-lg" @click="showDeleteModal=false; deleteUser()" >Yes</button>
                        
                    </div>
                </form>
            </div>
        </div>
    </div>
 </div>
</div>

</template>

<script>
import axios from "axios"
export default {
name:'Addagenda',
data(){
    return{
        types:[
            
        ],
        newtypes:{agendaname:"",minutestype:'',assigne:'',priority:'',assigndate:'',minutesdesc:''},
        currenttype:{},
        isAction:false,
        typevalue:"Notes",
        showDeleteModal:false,
    }
},
props:{
    showModal:Boolean,
    
},
mounted: function() {
this.getAlltypes();
},
methods:{
    getAlltypes(){
        axios.get("http://localhost:8080/prominutes/process.php?action=read").then(
            response => {this.types = response.data.types}
        );
    },
    addUser(){
        var formData = this.toFormData(this.newtypes);
        axios.post("http://localhost:8080/prominutes/process.php?action=create",formData).then(response => {
                this.newtypes ={agendaname:"",minutestype:'',assigne:'',priority:'',assigndate:'',minutesdesc:''};
                this.getAlltypes();
                console.log(response);
    }
        );
    },
    deleteUser(){
        var formData = this.toFormData(this.currenttype);
        axios.post("http://localhost:8080/prominutes/process.php?action=delete",formData).then(response => {
                this.currenttype ={};
                this.getAlltypes();
                console.log(response);
    }
        );
    },
    toFormData(obj){
        var fd = new FormData();
        for(var i in obj){
            fd.append(i,obj[i]);
        }
        return fd;
    },
    selectUser(user){
        this.currenttype = user;
    },
    changetype(){
        if(this.typevalue == "Action"){
            this.isAction = true;
        }
        else{
            this.isAction =false;
        }
    }
}
}
</script>

<style src="../assets/CSS/Addagenda.css">

</style>