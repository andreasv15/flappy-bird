class Game {

    constructor() {
        // todas nuestras propiedades del juego
        // CADA juego tendra un fondo, un pollo, y los tubos, por lo que habria que crearlos aqui 
        this.bg = new Image(); // fondo 
        this.bg.src = "./images/bg.png";
        this.pollo = new Pollo(); 
        //console.log(this.pollo);
        //this.pipe = new Pipe();
        this.pipeArr = [ new Pipe(0, "../images/obstacle_top.png") ];
        this.isGameOn = true;

    }

    addNewPipes = () => {
        // condicionar cuando aparecen nos nuevos pipes
        // si ponemos pipeArr[0], comrpobara siempre el mismo, y seria infinito, por lo que tendriamos que poner el ULTIMO elemento
        if (this.pipeArr[this.pipeArr.length -1].x < 400) {

            let randomPositionChange = Math.random() * -90;

            // este es el pipe de arriba
            let newPipe = new Pipe(randomPositionChange, "./images/obstacle_top.png");
            this.pipeArr.push(newPipe);

            // este es el pipe de abajo
            let newPipeDown = new Pipe(randomPositionChange + 370, "./images/obstacle_bottom.png");
            this.pipeArr.push(newPipeDown);

        }
    }
    // otra opcion de añadir nuevos pipes, es con un set interval, y que cada 2 segundos cree un nuevo pipe


    gameOverCollision = () => {

        // de cada pipe, checkear si colisiona con el pollo

        this.pipeArr.forEach( (eachPipe) => {

            if (this.pollo.x < eachPipe.x + eachPipe.w &&
                this.pollo.x + this.pollo.w > eachPipe.x &&
                this.pollo.y < eachPipe.y + eachPipe.h &&
                this.pollo.h + this.pollo.y > eachPipe.y) {
                // collision detected!
                //console.log("colisiona");
                //finaliza el juego

                // 1. el juego se detiene
                this.isGameOn = false;

                // 2. el canvas desaparece
                canvas.style.display = "none";

                // 3. la pantalla final aparece
                gameOverScreen.style.display = "flex";
            }

        })
    }



    // todos los metodos que regulan nuestro juego
    gameLoop = () => {
        //console.log("juego andando");
        
        // 1. borrar el canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // 2. acciones o movimientos de los elementos
        // aqui invocaremos el metodo del pollo (movimiento bajada)
        this.pollo.gravityPollo();
        this.addNewPipes();
        
        // checkear si el pollo choca con el pipe
        this.gameOverCollision();

        //this.pipe.movePipe(); // mueve un pipe
        this.pipeArr.forEach((eachPipe) => {
            eachPipe.movePipe();
        })

        // 3. dibujar los elementos
        ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height); // imagen de fondo empieza de 0 (x,y), y termina en canvas width y height (x,y)
        this.pollo.drawPollo();

        //this.pipe.drawPipe(); // dibuja un solo pipe
        this.pipeArr.forEach((eachPipe) => {
            eachPipe.drawPipe();
        })

        
        // 4. control y recursividad
        if (this.isGameOn) {
            requestAnimationFrame(this.gameLoop);
        } else {

        }


    }


}

/////////////////////////////////////////////////////////
// BONUS IMPORTANTE NO OLVIDARSE DE REMOVER LOS PIPES //
////////////////////////////////////////////////////////
// checkear cada pip que haya llegado al inicio del canvas y borrarlo



