function evaluar(){
    var cumple=document.getElementById("fecha").value;
    var mes = cumple.substring(5,7);

    const si="Felicidades, obtuviste un 2x1 por tu mes de cumpleaños"
    const no="Desafortunadamente, no obtuviste un 2x1, hubieras nacido mejor en Mayo :("

    if(mes != "05" ){
        document.getElementById("mensaje").value=no;
    }else{
        document.getElementById("mensaje").value=si; 
    }

}