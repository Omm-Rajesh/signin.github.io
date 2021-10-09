function validate()
{
    var username = document.getElementById("username"). value;
    var password = document.getElementById("password"). value;
    if(username=="HBD-Dhana" && password=="missumama")
    {
    
        alert("login successful");
    
        
    }
    else
    {
        alert("login failed");
        return false;
        
    }
}
