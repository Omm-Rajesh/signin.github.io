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
        alert ("wrong password")
        
    } 
           }
    else
    {
        alert("Wrong ID");
        return false;
        
    }
}
