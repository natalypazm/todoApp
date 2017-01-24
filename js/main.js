    var tareaInput = document.getElementById("tareaInput");
    var boton = document.getElementById("btn-agregar");
    var lista= document.getElementById("lista");

    function agregarTarea(){
        var tarea = document.createElement("div"); 
        var contenido = document.createElement("span");
        contenido.innerText = tareaInput.value;
        tarea.className = "listas";
        tarea.appendChild(contenido);
        lista.appendChild(tarea);
        var check = document.createElement("input");
        check.setAttribute("type", "checkbox");
        tarea.insertBefore(check,tarea.childNodes[0]);
        check.addEventListener("click", function(){
            
            if(this.checked){
                this.parentElement.classList.add("tachado");
            }
            else
                this.parentElement.classList.remove("tachado");
        });
        
        
        var botonTacho = document.createElement("button");
        var tacho = document.createElement("i");  
        botonTacho.appendChild(tacho);
        botonTacho.className="tacho pull-right fa fa-trash";
        botonTacho.classList.add("tacho");
        tarea.appendChild(botonTacho);   
        
        botonTacho.addEventListener("click", function(){
                lista.removeChild(tarea); 
            });
        };
        boton.addEventListener("click", function(){
                agregarTarea();
                tareaInput.value = "";
                tareaInput.focus(); 

            if(tareaInput == "") {
                tareaInput.setAttribute("placeholder", "Agrega una tarea válida");
                return false;
            }
            
            
        });
    