let canvas = document.getElementById("canvas");
let miMosca;
console.log(canvas.style)

function comenzarJuego(){
    miMosca = new Mosca();
    miMosca.insertarMosca(canvas);
}

comenzarJuego();
