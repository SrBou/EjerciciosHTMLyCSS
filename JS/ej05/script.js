function alarm (){
    cont = document.querySelector("#cont").value;    
    alarmID = window.setTimeout(() => {                     
        window.alert("La alarma está sonando!!");
    }, cont * 1000);
}

function posponer () {
    cont = cont + document.querySelector("#cont").value;
    clearTimeout(alarmID);
    alarmID = window.setTimeout(() => {                     
        window.alert("La alarma está sonando!!");
    }, cont * 1000);
}

function stop () {
    clearTimeout(alarmID);
}

window.onload = () => {     
    const btnInicio = document.querySelector("#btnInicio");   
    const btnPosponer = document.querySelector("#btnPosponer");   
    const btnStop = document.querySelector("#btnStop");
    let cont = 0;   
    let alarmID = 0;
    btnInicio.addEventListener("click", alarm); 
    btnPosponer.addEventListener("click", posponer);
    btnStop.addEventListener("click", stop);
}   