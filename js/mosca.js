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
    if (this.direccion === "derecha"){// Es la mosca izquierda que viaja hacia a la derecha
        
        this.decrementoTop += -1;
        this.incrementoLeft += 1;
        let nuevaX = this.x + this.incrementoLeft;
        let nuevaY = this.y + this.decrementoTop;
        this.boton.style.top = nuevaY + "px";
        this.boton.style.left = nuevaX + "px";
        this.moscaFueradeCanvas(nuevaX, nuevaY);
    } else { // Es la mosca derecha que viaja hacia a la izquierda
        this.decrementoTop += -1;
        this.incrementoLeft += -1;
        let nuevaX = this.x + this.incrementoLeft;
        let nuevaY = this.y + this.decrementoTop;
        this.boton.style.top = nuevaY + "px";
        this.boton.style.left = nuevaX + "px";
        this.moscaFueradeCanvas(nuevaX, nuevaY);
    }
    
  }

  comenzarVuelo(){
    this.temporizadorDeMosca = setInterval( () => this.moverMosca(), 10);
  }
  
  moscaFueradeCanvas(nuevaX, nuevaY){
    if(this.direccion === "derecha"){
      if ((nuevaY + this.height < 0) || (nuevaX > 800) ){
        clearInterval(this.temporizadorDeMosca); 
        this.eliminarMosca();

      }      
    }else{
      if ((nuevaY + this.height < 0) || (nuevaX + this.width < 0) ){
        clearInterval(this.temporizadorDeMosca); 
        this.eliminarMosca();
      }
    }
  }

  eliminarMosca(){
    canvas.removeChild(this.boton);
  }
}
