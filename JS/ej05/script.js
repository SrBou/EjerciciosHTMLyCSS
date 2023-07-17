window.onload = () => {     
    const btn = document.querySelector("#btn");
    btn.addEventListener("click", () => {
        const cont = document.querySelector("#cont").innerHTML;    
        console.log(cont);
        window.setTimeout(() => {                     
            window.alert("La alarma está sonando!!")
        }, cont * 1000);
    }); 
}   