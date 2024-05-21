class Mosca{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.width = 50;
        this.height = 50;
        this.boton = document.createElement('button');
        this.lado = true; //si lado es true la mosca sale a izquierda y si es false sale a derecha
        this.speed = 5;        
    }
    
    insertarMosca(){
        this.boton.setAttribute('class','mosca');
        this.boton.style.top = this.y + 'px';
        this.boton.style.left = this.x + 'px';
        this.boton.style.width = this.width + 'px';
        this.boton.style.height = this.height + 'PX';
        canvas.appendChild(this.boton);
    }
}