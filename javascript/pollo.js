class Pollo {
    constructor() {
        // multiples propiedades del pollo
        this.x = 40; // posicion con eje x
        this.y = 40; // posicion con eje y
        this.w = 50; // ancho
        this.h = 40; // alto
        this.img = new Image();
        this.img.src = "./images/flappy.png";
        this.speed = 1;


    }

    // metodos del pollo
    drawPollo = () => {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    }

    // metodo para hacer que el pollo se mueva hacia abajo
    gravityPollo = () => {
        //console.log("pollito bajando");
        // cambiamos la posicion Y del pollo para ir bajando, para que baje hay que ir sumando
        this.y = this.y + this.speed;
    }
    
        // subir la posicion del pollo 
    jumpPollo = () => {
        //a la posicion Y le vamos restando
        this.y = this.y - 50;
    }

}
