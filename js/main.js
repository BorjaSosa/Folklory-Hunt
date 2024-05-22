let canvas = document.getElementById("canvas");
let miMosca;
let miBoton=[];// Este el array esta vacío
let bucleMosca;
let moscaEliminadas = 0;
let aceleracion = 1;

function comenzarJuego(){
    if(miBoton.length < 1){// Primero veo si el array esta vacío o hay una mosca. Si esta vacío añado una mosca.
        miMosca = new Mosca();
        miMosca.insertarMosca();
        miMosca.comenzarVuelo();
        miBoton = document.getElementsByClassName("mosca");
        miBoton[0].addEventListener("click", () => {
            miMosca.eliminarMosca();
            console.log(moscaEliminadas);
        });
    }
}


 


     bucleMosca = setInterval(()=>{comenzarJuego()}, 1);//El juego se ejecuta aquí. 
