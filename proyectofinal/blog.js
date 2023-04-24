function iniciar(){
    var boton=document.getElementById('guardar');
    boton.addEventListener('click', nuevoitem, false);
    mostrar();
    }
    
    function nuevoitem(){
    var clave=document.getElementById('usuario').value;
    var valor=document.getElementById('comentario').value;
    localStorage.setItem(clave,valor);
    mostrar();
    document.getElementById('usuario').value='';
    document.getElementById('comentario').value='';
    }
    
    function mostrar(){
    var cajadatos=document.getElementById('cajadatos');
    cajadatos.innerHTML='';
    for(var f=0;f<localStorage.length;f++){
    var clave=localStorage.key(f);
    var valor=localStorage.getItem(clave);
    cajadatos.innerHTML+='<div>'+clave+' - '+valor+'</div>';
    }
    }
    
    window.addEventListener('load', iniciar, false);
    
    function elimina()
    {
    
        if(confirm('Está Seguro?')){
            localStorage.clear();
            mostrar();
            }
    }