function validate()
{
    var username = document.getElementById("username"). value;
    var password = document.getElementById("password"). value;
    if(username=="HBD-DHANA" && password=="MISSUMAMA")
    {
    
        alert("login successful");
    
        
    }
    else
    {
        alert("login failed");
        return false;
        
    }
}
