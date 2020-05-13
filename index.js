var a = document.getElementById('email')
var i = document.getElementById('input')
var n = a.value.indexOf("@");
var l = a.value.lastIndexOf(".");
var b=document.querySelector('form')
b.addEventListener('submit', function error(){
    if(a.value==="")
    {
        i.style.border="2px solid red";
        document.getElementById('error').style.display="block";
        return false;
    }
    
    else{
        return true;
    }

});
