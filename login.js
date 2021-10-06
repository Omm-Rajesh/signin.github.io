function validate()
{
    var username = document.getElementById("username"). value;
    var password = document.getElementById("password"). value;
    if(username=="Happy-Birthday" && password=="iloveumama")
    {
    
        alert("login successful");
    
        
    }
    else
    {
        alert("login failed");
        return false;
        
    }
}
