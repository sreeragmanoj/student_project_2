var nam=document.getElementById("name")
var email=document.getElementById("email")
var pass1=document.getElementById("pass1")
var pass2=document.getElementById("pass2")
var ph=document.getElementById("ph")



function validname(){
    var fn = nam.value;
    if(isNaN(fn)){
        nam.className = 'success';
        document.getElementById('text').innerHTML='';
         }
         else{
            nam.className="error";
            document.getElementById("signup").disabled=true;
            document.getElementById("text").innerHTML="please enter your name";
         }
}

function validemail(){
    var mail = email.value;
    var re = /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if  (re.test(mail)){
        email.className = 'success';
        document.getElementById('text').innerHTML='';
         }
         else{
            email.className="error";
            document.getElementById("signup").disabled=true;
            document.getElementById("text").innerHTML="please enter your email";
         }
}

function validph(){
    var num = ph.value;
    if  (isNaN(num)){
        ph.className="error";
        document.getElementById("signup").disabled=true;
        document.getElementById("text").innerHTML="please enter your valid phone number";
    }
    else{
        var num1=num.length;
        if(num1==10){
            ph.className = 'success';
            document.getElementById('text').innerHTML='';
        }
        else{
            ph.className="error";
            document.getElementById("signup").disabled=true;
            document.getElementById("text").innerHTML="please enter your valid phone number";
         }

    }
}

function validpass1(){
  
    var passl= pass1.value.length;
    if(passl>=8 & passl<=16){
        pass1.className="success";
        document.getElementById('text').innerHTML='';
    }
    else{
        pass1.className="error";
        document.getElementById("signup").disabled=true;
        document.getElementById("text").innerHTML="Password strenth must be more than 8";
    }

}

function validpass2(){
    var pass=pass1.value;
    var passc=pass2.value;
    if(pass == passc){
        pass2.className="success";
        document.getElementById("text").innerHTML="";
        document.getElementById("signup").disabled=false;
        
    }
    else{
        pass2.className="error"
        document.getElementById("signup").disabled=true;
        document.getElementById("text").innerHTML="password not match";

    }
}


document.getElementById("signup").disabled=true;