function validate()
{
    var username = document.getElementById("username"). value;
    var password = document.getElementById("password"). value;
    if(username=="Rajesh" && password=="Wxyz321@")
    {
    
        alert("login successful");
    
        
    }
    else
    {
        alert("login failed");
        return false;
        
    }
}
