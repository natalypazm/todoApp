    var tareaInput = document.getElementById("tareaInput");
    var boton = document.getElementById("btn-agregar");
    var lista = document.getElementById("lista");
    boton.setAttribute("onclick","agregar()");

    var listaTareas=[];

        function agregar() {
        var tareaInput=document.getElementById("tareaInput");
        if(tareaInput.value !="" || tareaInput.value.length !=0){
           listaTareas.push({nombre:tareaInput.value,isDone:false});
           tareaInput.innerHTML=""; 
        }else{
            tareaInput.setAttribute("placeholder","Tarea Inválida");
        }
        tareaInput.value="";
        drawTasksList();

    }

    function drawTasksList(){
        lista.innerHTML="";
        for(var i in listaTareas){
            var tarea = "<li " + (listaTareas[i].isDone?"style='text-decoration:line-through'":"style='text-decoration:none'")
            +"><input onclick='selectInput(" + i + ")' type='checkbox'"+(listaTareas[i].isDone?"checked":"")+">"+"<span>"+listaTareas[i].nombre 
            +"</span><i onclick='deleteSpan("+i+")' class='tacho pull-right fa fa-trash'></i></li>";
                 lista.innerHTML += tarea;
        }
    }
  



    function selectInput(_index){
        if(listaTareas[_index].isDone==false){
            listaTareas[_index].isDone=true;
           
        }else{
            listaTareas[_index].isDone=false;
        }

        drawTasksList();
    }


    function deleteSpan(_index){
        listaTareas.splice(_index,1);
        drawTasksList();   
    }


  













/*

    function agregarTarea(){
           if(tareaInput.value == "") {
                tareaInput.setAttribute("placeholder", "Agrega una tarea válida");
            }
            else{
        var tarea = document.createElement("div"); 
        var contenido = document.createElement("span");
        contenido.innerText = tareaInput.value;
        tarea.className = "listas";
        tarea.appendChild(contenido);
        lista.appendChild(tarea);
        }
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
               // tareaInput.focus(); 
        });


*/


        /*
        var listaTareas=[
            ["caminar",true],
            ["hola",false]
        ];
        function drawTasksList(){
            var lista=document.getElementById("lista");
            for(var i in listaTareas){
                var html="<li><input type='checkbox'"+(listaTareas[i][1]?"checked":"")+">"+listaTareas[i][0]+"</li>";
                lista.innerHTML+=html;
            }
        };
        */
        
         /* var tareaInput = document.getElementById("tareaInput");
    var boton = document.getElementById("btn-agregar");
    var lista= document.getElementById("lista");

    function agregarTarea(){
           if(tareaInput.value == "") {
                tareaInput.setAttribute("placeholder", "Agrega una tarea válida");
            }
            else{
        var tarea = document.createElement("div"); 
        var contenido = document.createElement("span");
        contenido.innerText = tareaInput.value;
        tarea.className = "listas";
        tarea.appendChild(contenido);
        lista.appendChild(tarea);
        }
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
               // tareaInput.focus(); 
        });
        */
        /*
        var listaTareas=[
            ["caminar",true],
            ["hola",false]
        ];
        function drawTasksList(){
            var lista=document.getElementById("lista");
            for(var i in listaTareas){
                var html="<li><input type='checkbox'"+(listaTareas[i][1]?"checked":"")+">"+listaTareas[i][0]+"</li>";
                lista.innerHTML+=html;
            }
        };
        
        
            var listaTareas=[
            {nombre:"Tarea",isDone:true},
            {nombre:"T2",isDone:false}
            ];
        function drawTasksList(){
            var lista=document.getElementById("lista");
            for(var i in listaTareas){
                var html="<li><input type='checkbox'"+(listaTareas[i].isDone?"checked":"")+">"+listaTareas[i][0]+"</li>";
                lista.innerHTML+=html;
            }
        };
        */
    