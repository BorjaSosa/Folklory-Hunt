class Mosca{
    constructor(){
        
        
        this.width = 50;
        this.height = 50;
        this.boton = document.createElement('button');
         //si lado es true la mosca sale a izquierda y si es false sale a derecha
                
    }
    
    insertarMosca(canvas){
        this.boton.setAttribute('class','mosca');
       
        this.dimeLado(canvas);
        this.boton.style.width = this.width + 'px';
        this.boton.style.height = this.height + 'PX';
        canvas.appendChild(this.boton);
        
    }

    dimeLado(canvas){
      let ceroOUno = Math.round(Math.random());
      console.log(ceroOUno)
      //si lado es true la mosca sale a izquierda y si es false sale a derecha
      if (ceroOUno) {
        console.log(canvas);
        let puntoIzq = canvas.style.height - this.boton.style.height;
        console.log(puntoIzq);
        this.boton.style.top = puntoIzq + "px";
        
      }
    }
}   