function addImg (){       
    if(count < 5){
    const imgURL = images[count];
    let newElement = document.createElement("img");
    newElement.classList.add("image");    
    newElement.src = imgURL;   
    document.querySelector("#myDiv").appendChild(newElement);    
    count += 1;
    position.setAttribute("max", count);
    }
}

function deleteImg() {
    let position = document.querySelector("#position").value;
    document.querySelector("#myDiv").childNodes[position].remove();
    count -= 1;
}

let count = 0;
images = [
    "cat-gf13e637fd_1280.jpg",
    "maine-coon-cat-gfb3dea431_1280.jpg",
    "cat-gc955e05f4_1280.jpg",
    "cat-ga820cd5a5_1280.jpg",
    "cat-g173f725f8_1280.jpg"
];
window.onload = function() { 
    let position = document.querySelector("#position");
    position.setAttribute("max", count);
    position.setAttribute("min", 0);
    const btnAñadir = document.querySelector("#add"); 
    const btnEliminar = document.querySelector("#delete");
    btnAñadir.addEventListener("click", addImg); 
    btnEliminar.addEventListener("click", deleteImg); 
}
