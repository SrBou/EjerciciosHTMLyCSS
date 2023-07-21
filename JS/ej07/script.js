function addImg (){       
    if(cont < 5){
    const imgURL = "Xokas_zoom.png";
    let newElement = document.createElement("img");
    newElement.classList.add("image");
    newElement.src = imgURL;   
    document.querySelector("#myDiv").appendChild(newElement);    
    cont += 1;
    }
}
let cont = 0;
window.onload = function() { 
    
    const btnAñadir = document.querySelector(".btn");   
    btnAñadir.addEventListener("click", addImg); 
}
