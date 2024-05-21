class Mosca{
    constructor(){
        
        
        this.width = 50;
        this.height = 50;
        this.boton = document.createElement('button');
         //si lado es true la mosca sale a izquierda y si es false sale a derecha
                
    }
    
    insertarMosca(){
        this.boton.setAttribute('class','mosca');
       
        this.dimeLado();
        this.boton.style.width = this.width + 'px';
        this.boton.style.height = this.height + 'PX';
        canvas.appendChild(this.boton);
        
    }

    dimeLado(){
      let ceroOUno = Math.round(Math.random());
      console.log(ceroOUno)
      //si lado es true la mosca sale a izquierda y si es false sale a derecha
      if (ceroOUno) {
        
        this.boton.style.top = 450 + "px";
        
      }else{
        this.boton.style.top = 450 + "px";
        this.boton.style.left = 750 + "px";
      }
    }
}   