
window.onload = function() { 
    let i = 0;
    let element = document.getElementById("contenido");
    element.innerHTML = "Hola mundo!";
    let colores = ["red", "lightblue", "pink", "yellowgreen"];
    window.setInterval(
        function(){            
            if(i === 4){
                i = 0;
            }            
            element.style.backgroundColor = colores[i++]
        }, 1000);        
    }
