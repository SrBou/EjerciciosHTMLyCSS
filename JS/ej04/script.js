
window.onload = function() { 
    let elements = document.getElementsByClassName("now");
    let today;
    window.setInterval(
        function(){            
            today = new Date();
            for(let i = 0; i < elements.length; i++) {
                elements.item(i).innerHTML = today.toLocaleString();
            };            
        }, 1000);        
    }
