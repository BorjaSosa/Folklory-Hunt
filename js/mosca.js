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
    //si lado es true la mosca sale a izquierda y si es false sale a derecha
  }

  insertarMosca() {
    this.dimeLado();
    this.boton.style.width = this.width + "px";
    this.boton.style.height = this.height + "px";
    this.boton.style.position = "absolute";
    this.boton.setAttribute("class", "mosca");
    canvas.appendChild(this.boton);
  }

  dimeLado() {
    let ceroOUno = Math.round(Math.random());
    //console.log(ceroOUno);
    //si lado es true la mosca sale a izquierda y si es false sale a derecha
    if (ceroOUno) {
      this.boton.style.top = 450 + "px";
      this.x = 0;
      this.direccion = "derecha";
    } else {
      this.boton.style.top = 450 + "px";
      this.boton.style.left = 750 + "px";
      this.x = 750;
      this.direccion = "izquierda";
    }
  }

  moverMosca() {
    let aleatorioY= Math.ceil(Math.random()*10);// Devulve número entre 1 y 10
    let aleatorioX = Math.ceil(Math.random() * 10);
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
    this.temporizadorDeMosca = setInterval( () => this.moverMosca(), 100);
  }
  
  moscaFueradeCanvas(nuevaX, nuevaY){
    if(this.direccion === "derecha"){
      if ((nuevaY + this.height < 0) || (nuevaX > 800) ){
        clearInterval(bucleMosca)
        this.eliminarMosca();
        this.pantallafinal();

      }      
    }else{
      if ((nuevaY + this.height < 0) || (nuevaX + this.width < 0) ){ 
        clearInterval(bucleMosca)
        this.eliminarMosca();
        this.pantallafinal();
      }
    }
  }

  eliminarMosca(){
    canvas.removeChild(this.boton);
    clearInterval(this.temporizadorDeMosca); 
    moscaEliminadas++;
    aceleracion *= 1.05;

  }

  pantallafinal(){
    canvas.style.backgroundImage = "url('../assets/img/teloncerrado.png')";
    canvas.style.backgroundRepeat = "no-repeat";
    canvas.style.backgroundSize = "cover";
    //añado un h1 que pone game over
    canvas.appendChild(document.createElement("h1"));
    let mish1 = document.getElementsByTagName("h1");
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
    canvas.appendChild(document.createElement("h1"));
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
  
    



    
  }

}
