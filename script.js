function ageCalculator() {  
    var userinput = document.getElementById("dob").value;  
    var dob = new Date(userinput); 
    if(userinput==null || userinput=='') {  
      document.getElementById("message").innerHTML = "**Choose a date please!";    
      return false;   
    } else {  
      //year , month ,date from user date input
      var dob_year = dob.getFullYear();
      var dob_month = dob.getMonth();
      var dob_date = dob.getDate();
     
      //current date month year
      var now = new Date();
      var current_year = now.getFullYear();
      var current_month = now.getMonth();
      var current_Date = now.getDate();

      var age={};
      var ageString = " ";

      var yearAge = current_year - dob_year;
      
      //get month
      if(current_month >= dob_month){
        
        var monthAge = current_month - dob_month;
      }else{
        yearAge--;
        var monthAge = 12 + current_month - dob_month;
      }
       
      //get Date
      if(current_Date >= dob_date){
        var dateAge = current_Date - dob_date;
      }else{
        monthAge--;
        var dateAge = 31 + current_Date - dob_date;

        if(monthAge < 0){
          monthAge =11;
          yearAge--;
        }
      }
      
      //group the age in single variable
      age = {
        year:yearAge ,  month:monthAge , days:dateAge
      };
      
      if( (age.year > 0) && (age.month > 0) && (age.days >0)){
         ageString = age.year + " years ," + age.month + "months , "+age.days+"days .";
      
      }else if((age.year == 0) && (age.month == 0) && (age.days >0)){
            ageString = "only "+age.days +" days old .";

      }else if((age.year >0) && (age.month == 0) && (age.days==0)){
        ageString = age.year +" year old .Happy birthday !!"
      
      }else if((age.year> 0 ) && (age.month>0) && (age.days == 0)){
        ageString = age.year + " years and " + age.month + "months old.";

      }else if((age.year == 0) && (age.month >0) && (age.days > 0)){
        ageString = age.month +" months and "+ age.days +"days .";

      }else if((age.year >0) && (age.month == 0) && (age.days > 0)){
        ageString = age.year + "years and " +age.days +"days old. ";
      
      }else if((age.year == 0) && (age.month >0) && (age.days == 0)){
        ageString = age.month +" months old.";

      }else{
        ageString = "Welcome to Earth <br> its first day on earth ."
      }

      return document.getElementById("result").innerHTML = ageString;

    }  
}  