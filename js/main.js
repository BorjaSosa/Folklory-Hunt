let canvas = document.getElementById("canvas");
let miMosca;


function comenzarJuego(){
    miMosca = new Mosca(400, 100);
    miMosca.insertarMosca();
}

comenzarJuego();
