let canvas = document.getElementById("canvas");
let miMosca;


function comenzarJuego(){
    miMosca = new Mosca();
    miMosca.insertarMosca();
    miMosca.comenzarVuelo();
}

comenzarJuego();
