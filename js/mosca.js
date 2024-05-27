class Mosca {
  constructor() {
    this.y = 450;
    this.x = null;
    this.width = 50;
    this.height = 50;
    this.boton = document.createElement("button");
    this.direccion = null;
    this.temporizadorDeMosca = null;
    this.incrementoLeft = 0;
    this.decrementoTop = 0;
    this.canciones = [
      "../assets/audio/cancion-Falete.mp3",
      "../assets/audio/cancion-Pantoja.mp3",
      "../assets/audio/cancion-MariaDelMonte.mp3",
      "../assets/audio/cancion-RocioJurado.mp3",
      "../assets/audio/cancion-Lolita.mp3",
      "../assets/audio/cancion-Chiquetete.mp3",
      "../assets/audio/cancion-Chunguitos.mp3",
      "../assets/audio/cancion-ManoloEscobar1.mp3",
      "../assets/audio/cancion-ManoloEscobar2.mp3",
      "../assets/audio/cancion-ElFary.mp3",
      "../assets/audio/cancion-PaquitaLaDelBarrio.mp3",
    ];
    
  }

  insertarMosca() {
    this.dimeLado();
    this.boton.style.width = this.width + "px";
    this.boton.style.height = this.height + "px";
    this.boton.style.position = "absolute";
    this.boton.setAttribute("class", "mosca");
    canvas.appendChild(this.boton);
    this.boton.appendChild(document.createElement("audio"));
    let cancion = document.getElementsByTagName("audio");
    let elegirCancion = Math.round(Math.random() *10);
    cancion[0].src = this.canciones[elegirCancion];
    cancion[0].setAttribute("autoplay","true");
    cancion[0].setAttribute("loop", "true"); 
    
  }

  dimeLado() {
    
    let posicionRandom = Math.round(Math.random()*750);
    //si lado es true la mosca sale a izquierda y si es false sale a derecha
    if (posicionRandom <= 350) {
      this.boton.style.top = 450 + "px";
      this.boton.style.left = posicionRandom + "px";
      this.x = posicionRandom;
      this.direccion = "derecha";
    } else {
      this.boton.style.top = 450 + "px";
      this.boton.style.left =  posicionRandom + "px";
      this.x = posicionRandom;
      this.direccion = "izquierda";
    }
  }

  moverMosca() {
    let aleatorioY= Math.ceil(Math.random() * 5 );// Devulve número entre 1 y 10
    let aleatorioX = Math.ceil(Math.random() * 5);
    if (this.direccion === "derecha"){// Es la mosca izquierda que viaja hacia a la derecha
        
        this.decrementoTop += aleatorioY *-1 * aceleracion;// -1 Porque va hacia arriba en direccionn a Top
        this.incrementoLeft += aleatorioX * aceleracion;
        let nuevaX = this.x + this.incrementoLeft;
        let nuevaY = this.y + this.decrementoTop;
        this.boton.style.top = nuevaY + "px";
        this.boton.style.left = nuevaX + "px";
        this.moscaFueradeCanvas(nuevaX, nuevaY);
    } else { // Es la mosca derecha que viaja hacia a la izquierda
      this.decrementoTop += aleatorioY *-1 *aceleracion;
        this.incrementoLeft += aleatorioX * -1 *aceleracion;// Negativo porque la mosca en la derecha quiero que vaya hacía la derecha
        let nuevaX = this.x + this.incrementoLeft;
        let nuevaY = this.y + this.decrementoTop;
        this.boton.style.top = nuevaY + "px";
        this.boton.style.left = nuevaX + "px";
        this.moscaFueradeCanvas(nuevaX, nuevaY);
    }
    
  }

  comenzarVuelo(){
    this.temporizadorDeMosca = setInterval( () => this.moverMosca(), 50);
  }
  
  moscaFueradeCanvas(nuevaX, nuevaY){
    if(this.direccion === "derecha"){
      if ((nuevaY + this.height < 0) || (nuevaX > 800) ){
        clearInterval(bucleMosca)
        this.eliminarMosca();
        setTimeout( () => {pantallaFinal()}, 500);


      }      
    }else{
      if ((nuevaY + this.height < 0) || (nuevaX + this.width < 0) ){ 
        clearInterval(bucleMosca)
        this.eliminarMosca();
        setTimeout( () => {pantallaFinal()}, 500);
        
      }
    }
  }

  eliminarMosca(){
    
    clearInterval(this.temporizadorDeMosca);
    let cancion = document.getElementsByTagName("audio");
    cancion[0].src = "../assets/audio/golpe-karate.mp3";
    this.boton.style.backgroundImage = "url(../assets/img/explosion2.gif)";
    setTimeout( () => {
      canvas.removeChild(this.boton);      
      moscaEliminadas++;
      cartelesButacas[1].innerHTML = moscaEliminadas + 1;
      aceleracion *= 1.05;
    }, 500);
  }
}
