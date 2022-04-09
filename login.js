function validate()
{
    var username = document.getElementById("username"). value;
    var password = document.getElementById("password"). value;
    if(username=="Rajesh" && password=="Wxyz321@")
    {
    
        alert("login successful");
    
        
    }
    else if(username=="Rajesh")
           {
    if(password=="Wxyz321@")
    {
        alert ("login successful")
        
    }   else
    {
        alert("Wrong password");
        return false;
        
    }
               
           }
    else
    {
        alert("Wrong ID");
        return false;
        
    }
}
