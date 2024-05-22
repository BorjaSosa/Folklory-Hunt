let canvas = document.getElementById("canvas");
let miMosca;
let miBoton=[];
let bucleMosca;

function comenzarJuego(){
    console.log(miBoton.length)
    if(miBoton.length < 1){
    miMosca = new Mosca();
    miMosca.insertarMosca();
    miMosca.comenzarVuelo();
    miBoton = document.getElementsByClassName("mosca");
    miBoton[0].addEventListener("click", () => {
        miMosca.eliminarMosca();
        console.log(miBoton)
    });
    }
}


 


     bucleMosca = setInterval(()=>{comenzarJuego()}, 1000);
