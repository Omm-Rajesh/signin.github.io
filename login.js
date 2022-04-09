function validate()
{
    var username = document.getElementById("username"). value;
    var password = document.getElementById("password"). value;
    if(username=="Rajesh" && password=="Wxyz321@")
    {
    
        console.log("login successful");
    
        
    }
    else
    {
        alert("login failed");
        return false;
        
    }
}
