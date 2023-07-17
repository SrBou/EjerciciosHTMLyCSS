
window.onload = function() { 
    let element = document.getElementById("contenido");
    let today;
    window.setInterval(
        function(){            
            today = new Date();
            element.innerHTML = today.toLocaleString();            
        }, 1000);        
    }
