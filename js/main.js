(function(){
    // Variables
    var lista = document.getElementById("lista"),
    tareaInput = document.getElementById("tareaInput"),
    btnNuevaTarea = document.getElementById("btn-agregar");
    // Funciones
    var agregarTarea = function(){
        var tarea = tareaInput.value,
            nuevaTarea = document.createElement("li"),
            contenido = document.createTextNode(tarea);
            check= document.createElement("input");
            check.type= "checkbox";
            tacho=document.createElement("i");
            tacho.className="tacho pull-right fa fa-trash";

        if (tarea == "") {
            tareaInput.setAttribute("placeholder", "Agrega una tarea válida");
            tareaInput.className = "error";
            return false;
        }
        // Agregamos el contenido al li
        nuevaTarea.appendChild(check);
        nuevaTarea.appendChild(contenido);
        nuevaTarea.appendChild(tacho);
        // Agregamos la nueva tarea a la lista
        lista.appendChild(nuevaTarea);
        tareaInput.value = "";
        for (var i = 0; i <= lista.children.length -1; i++) {
            lista.children[i].addEventListener("click", function(){
                this.parentNode.removeChild(this);
            });
        }
    };
    var comprobarInput = function(){
        tareaInput.className = "";
        tareaInput.setAttribute("placeholder", "Añade tu nueva tarea :)");
    };
    var eliminarTarea = function(){
        this.parentNode.removeChild(this);
    };
    var tacharTarea = function(){
       if(check.checked==true){
        nuevaTarea.className="tachar";
       }
    }
    // Eventos
    // Agregar Tarea
    btnNuevaTarea.addEventListener("click", agregarTarea);
    // Comprobar Input
    tareaInput.addEventListener("click", comprobarInput);
    // Borrando Elementos de la lista
    for (var i = 0; i <= lista.children.length -1; i++) {
        lista.children[i].addEventListener("click", eliminarTarea);
    }
}());
