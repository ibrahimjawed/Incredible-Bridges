
// FEEDBACK JAVA SCRIPT //

function validation()
{
    //input values
        var f = document.getElementById("fname").value ;
        var l = document.getElementById("lname").value ;
        var a = document.getElementById("age").value ;
        var p = document.getElementById("phone").value ;
        var r = document.getElementById("remarks").value ;
    //Regex
        var fnamecheck = /^[a-zA-Z. ]{3,20}$/ ;
        var lnamecheck = /^[a-zA-Z. ]{3,20}$/ ; 
        var agecheck = /^[\d]{2}$/;
        var phonecheck = /^[0-9]{11}$/;
        var rcheck = /^[a-zA-Z., ]{10,500}$/;
        if(fnamecheck.test(f) )
        {
            document.getElementById("ferror").innerHTML = "";
        }
        else
        {
            document.getElementById("ferror").innerHTML = "Invalid  First Name" ;
            return false;
        }
        if(lnamecheck.test(l) )
        {
            document.getElementById("lerror").innerHTML = "";
        }
        else
        {
            document.getElementById("lerror").innerHTML = "Invalid  Last Name" ;
            return false;
        }
        if(agecheck.test(a) )
        {
          if(a >=16 && a<=75)
          {
            document.getElementById("aerror").innerHTML = "";
          }
          else
          {
            document.getElementById("aerror").innerHTML = " Not Eligible  " ;
            return false;
          }
            
        }
        else
        {
            document.getElementById("aerror").innerHTML = " Invalid Age " ;
            return false;
        }
        if(phonecheck.test(p) )
        {
            document.getElementById("perror").innerHTML = "";
        }
        else
        {
            document.getElementById("perror").innerHTML = " Invalid Phone Number " ;
            return false;
        }
        if(rcheck.test(r) )
        {
            document.getElementById("rerror").innerHTML = "";
        }
        else
        {
            document.getElementById("rerror").innerHTML = "Your message must be 10 to 500 words with no special character except '.' or ',' " ;
            return false;
        }
        alert("Thank you so much for taking the time to leave us feedback.")
}


// CLOSE //