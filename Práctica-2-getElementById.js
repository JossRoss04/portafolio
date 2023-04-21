function sumarF(){
    var num1, num2,total;

    num1=parseFloat(document.getElementById("numero1").value);
    num2=parseFloat(document.getElementById("numero2").value);
    
    var resul=num1+num2;
    total=parseFloat(resul).toFixed(2);

    document.getElementById("resultado").innerHTML=total;
}

function restarF(){
    var num1, num2,total;

    num1=parseFloat(document.getElementById("numero1").value);
    num2=parseFloat(document.getElementById("numero2").value);

    var resul=num1-num2;
    total=parseFloat(resul).toFixed(2);

    document.getElementById("resultado").innerHTML=total;
}

function multiplicarF(){
    var num1, num2,total;

    num1=parseFloat(document.getElementById("numero1").value);
    num2=parseFloat(document.getElementById("numero2").value);

    var resul=num1*num2;
    total=parseFloat(resul).toFixed(2);

    document.getElementById("resultado").innerHTML=total;
}

function dividirF(){
    var num1, num2,total;

    num1=parseFloat(document.getElementById("numero1").value);
    num2=parseFloat(document.getElementById("numero2").value);

    var resul=num1/num2;
    total=parseFloat(resul).toFixed(2);
    
    document.getElementById("resultado").innerHTML=total;
}
