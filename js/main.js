let canvas = document.getElementById("canvas");
let miMosca;
let miBoton=[];
let bucleMosca;
let moscaEliminadas = -1;
let aceleracion = 1;
let misButacas = document.getElementById("butacas");
let botonStart = document.getElementById("boton-start");
let tituloStart = document.getElementById("titulo-start");
let padreMoscasStart = document.getElementById("padre-moscas-start");

function comenzarJuego(){
    if(miBoton.length < 1){// Primero veo si el array esta vacío o hay una mosca. Si esta vacío añado una mosca.
        miMosca = new Mosca();
        canvas.style.backgroundImage = "url(../assets/img/escenario_v2.jpeg";
        canvas.style.backgroundRepeat = "no-repeat";
        canvas.style.backgroundSize = "contain";
        miMosca.insertarMosca();
        miMosca.comenzarVuelo();
        miBoton = document.getElementsByClassName("mosca");
        miBoton[0].addEventListener("click", () => {
            miMosca.eliminarMosca();
        });
    }
}

function pantallaFinal(){
    misButacas.style.display = "none";
    canvas.style.backgroundImage = "url('../assets/img/teloncerrado.png')";
    canvas.style.backgroundRepeat = "no-repeat";
    canvas.style.backgroundSize = "cover";
    //añado un h1 que pone game over
    canvas.appendChild(document.createElement("h1"));
    canvas.appendChild(document.createElement("h1"));
    let mish1 = document.getElementsByTagName("h1");
    console.log(mish1);
    mish1[0].style.position = "absolute";
    mish1[0].style.textAlign = "center";
    mish1[0].innerText = "Game Over";
    mish1[0].style.fontFamily = "Pixelify Sans";
    mish1[0].style.fontSize = "45px";
    mish1[0].style.fontWeight = "700";
    mish1[0].style.color = "white";
    mish1[0].style.textShadow = "2px 2px 4px black";
    mish1[0].style.top = "40%";
    mish1[0].style.left = "35%";
    //añado h1 que pone la puntuación
    mish1[1].innerHTML = "Score: " + `<span id="puntuacion">${moscaEliminadas}</span>`;
    let miPuntuacion = document.getElementById("puntuacion");
    miPuntuacion.style.fontFamily = "Arial";
    mish1[1].style.position = "absolute";
    mish1[1].style.color = "white";
    mish1[1].style.textAlign = "center";
    mish1[1].style.fontFamily = "Pixelify Sans";
    mish1[1].style.fontSize = "28px";
    mish1[1].style.fontWeight = "400";
    mish1[1].style.textShadow = "2px 2px 4px black";
    mish1[1].style.top = "55%";
    mish1[1].style.left = "42%";
    //insertamos el boto reset
    canvas.appendChild(document.createElement("button"));
    let misbotones = document.getElementsByTagName("button");
    misbotones[0].innerText = "Reset";
    misbotones[0].style.position = "absolute";
    misbotones[0].style.textAlign = "center";
    misbotones[0].style.fontFamily = "Pixelify Sans";
    misbotones[0].style.top = "75%";
    misbotones[0].style.left = "42%";
    // -----Todos estos estilos son del boton nuestro------
    //misbotones[0].style.backgroundColor = "radial-gradient(#f7b379, #ffa70d)";
    //misbotones[0].style.color = "#711434";
    //misbotones[0].style.padding = "10px";
    //misbotones[0].style.borderRadius = "8px";
    //misbotones[0].style.boxShadow = "3px 3px 10px #f7b379, 5px 5px 15px #711434";
    //misbotones[0].style.border = "2px solid #3e0c2a";
    misbotones[0].setAttribute("id","boton-reset");
    misbotones[0].addEventListener("click", () => {
        canvas.removeChild(mish1[1]); // ojo usamos getElement los array están vivos, si borramos 1ero la posicion cero la 1 se convierte en posición cero, por lo que borramos del indice mayor al menor 
        canvas.removeChild(mish1[0]); 
        canvas.removeChild(misbotones[0]);
        canvas.style.backgroundImage = "none";
        aceleracion = 1;
        moscaEliminadas=-1;
        misButacas.style.display = "block";
        bucleMosca = setInterval(() => comenzarJuego(), 1);
    });    
}

//El juego comienza aquí. 
botonStart.addEventListener("click", () => {
    canvas.removeChild(tituloStart);
    canvas.removeChild(padreMoscasStart);
    canvas.removeChild(botonStart);
    misButacas.style.display = "block";
    bucleMosca = setInterval( () => {comenzarJuego()}, 1);
});

