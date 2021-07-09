import Addagenda from "D:/shyam/Quantana/Prominutes/prominutes/src/components/Addagenda.vue"
export default {
    name:'Rightpart',
    components: {
        Addagenda
      },
    data () {
        return{
            currentTime : this.currentdaytime(),
            currentDayYearTime : this.currentdayyeartime(),
            showModal:false
            
        }
    },
    
    methods : {
       toggleModal: function (){
        this.showModal= ! this.showModal
       },
        currentdaytime:function (){
            var date = new Date();
            var month = date.getMonth();
            var dd = (date.getDate() < 10 ? '0' : '') + date.getDate();
            var custmonth = '';
            switch(month) {
                case 0 :
                    custmonth = "jan";
                    break;
                case 1 :
                    custmonth = "Feb";
                    break;
                case 2 :
                    custmonth = "Mar";
                    break;
                case 3 :
                    custmonth = "Apr";
                    break;
                case 4 :
                    custmonth = "May";
                    break;
                case 5 :
                    custmonth = "Jun";
                    break;
               case 6 :
                    custmonth = "Jul";
                    break;
                case 7 :
                    custmonth = "Aug";
                    break;
                case 8 :
                    custmonth = "Sep";
                    break;
                case 9 :
                    custmonth = "Oct";
                    break;
                case 10 :
                    custmonth = "Nov";
                    break;
                case 11 :
                    custmonth = "Dec";
                    break;
            }
            
            var hours = date.getHours();
            var minutes = date.getMinutes();
            var ampm = hours >= 12 ? 'PM' : 'AM';
            hours = hours % 12;
            hours = hours ? hours : 12; // the hour '0' should be '12'
            minutes = minutes < 10 ? '0'+minutes : minutes;
            var strTime = hours + ':' + minutes+ ampm;
             var currenttime= custmonth + " " + dd +" " + "-" + " " + strTime;
            return currenttime;
            },
            currentdayyeartime:function (){
                var date = new Date();
                var month = date.getMonth();
                var dd = (date.getDate() < 10 ? '0' : '') + date.getDate();
                var custmonth = '';
                switch(month) {
                    case 0 :
                        custmonth = "jan";
                        break;
                    case 1 :
                        custmonth = "Feb";
                        break;
                    case 2 :
                        custmonth = "Mar";
                        break;
                    case 3 :
                        custmonth = "Apr";
                        break;
                    case 4 :
                        custmonth = "May";
                        break;
                    case 5 :
                        custmonth = "Jun";
                        break;
                   case 6 :
                        custmonth = "Jul";
                        break;
                    case 7 :
                        custmonth = "Aug";
                        break;
                    case 8 :
                        custmonth = "Sep";
                        break;
                    case 9 :
                        custmonth = "Oct";
                        break;
                    case 10 :
                        custmonth = "Nov";
                        break;
                    case 11 :
                        custmonth = "Dec";
                        break;
                }
                var day = date.getDay();
                var displayDay = " ";
                switch(day){
                    case 0:
                    displayDay = "Sun";
                    break;
                    case 1:
                    displayDay = "Mon";
                    break;
                    case 2:
                    displayDay = "Tues"
                    break;
                    case 3:
                    displayDay = "Wed";
                    break;
                    case 4:
                    displayDay = "Thu";
                    break;
                    case 5:
                    displayDay = "Fri";
                    break;
                    case 6:
                    displayDay = "Sat";
                    break;
                }
                var year = date.getFullYear();
                var hours = date.getHours();
                var minutes = date.getMinutes();
                var ampm = hours >= 12 ? 'PM' : 'AM';
                hours = hours % 12;
                hours = hours ? hours : 12; // the hour '0' should be '12'
                minutes = minutes < 10 ? '0'+minutes : minutes;
                var strTime = hours + ':' + minutes+ ampm;
                 var currentdayyeartime= displayDay + " " + custmonth + " " + dd +","+year + "-" + " " + strTime;
                 
                 
                return currentdayyeartime;
                },
                
    },
    
    

}

