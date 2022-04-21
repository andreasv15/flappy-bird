class Pipe {

    constructor(yParam, srcParam) {
        // multiples propiedades del tubo
        this.x = canvas.width; // posicion con eje x
        this.y = yParam; // posicion con eje y
        this.w = 50; // ancho
        this.h = 200; // alto
        this.img = new Image();
        this.img.src = srcParam;
        this.speed = 2;
    }

    drawPipe = () => {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    }

    movePipe = () => {
        this.x = this.x - this.speed;
    }


}