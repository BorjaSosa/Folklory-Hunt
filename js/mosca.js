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
    this.boton.setAttribute("class", "mosca");

    this.dimeLado();
    this.boton.style.width = this.width + "px";
    this.boton.style.height = this.height + "PX";
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
    if (this.direccion === "derecha"){
        
        this.decrementoTop += -1;
        this.incrementoLeft += 1;
        let nuevaX = this.x + this.incrementoLeft;
        let nuevaY = this.y + this.decrementoTop;
        console.log(this.incrementoLeft);
        this.boton.style.top = nuevaY + "px";
        this.boton.style.left = nuevaX + "px";
    } else {
        this.decrementoTop += -1;
        this.incrementoLeft += -1;
        let nuevaX = this.x + this.incrementoLeft;
        let nuevaY = this.y + this.decrementoTop;
        console.log(this.incrementoLeft);
        this.boton.style.top = nuevaY + "px";
        this.boton.style.left = nuevaX + "px";
    }
  }

  comenzarVuelo(){
    this.temporizadorDeMosca = setInterval( () => this.moverMosca(), 10);
  }
}
