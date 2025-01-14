const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext('2d');

    /*
    // rectangle
    ctx.fillStyle = 'red';
    ctx.fillRect(300,20,100,100)
    ctx.fillStyle = 'blue';
    ctx.fillRect(0,20,100,100)

    // draw line
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(200,200);
    ctx.lineTo(0,400);

    ctx.strokeStyle = "red";
    ctx.stroke();
    ctx.fillStyle = 'orange';
    ctx.fill();

    //circle
    ctx.beginPath();
    ctx.arc(200, 200, 100, 0, 2 * Math.PI, false);
    ctx.fillStyle = 'green';
    ctx.fill();

    //text
    ctx.font = '30px Arial';
    ctx.fillStyle = "red";
    ctx.fillText("hello...", 0,350)

    //image

    let image = new Image();
    image.src = "pngwing.com (3).png"
    image.onload = function(){
        ctx.drawImage(image, 200,200,200,200)
    }
    */

    /*window.onload = function () {
        alert("Start Game!");
    };*/
 
    class Block{
        constructor(color,x,y,w,h){
            this.color = color;
            this.x = x;
            this.y = y;
            this.w = w;
            this.h = h;
            
            this.speedX = 0;
            this.speedY = 0;
        }
        draw(){
            console.log(this.x);
            if (
                (this.speedX > 0 && this.x < 300) || (this.speedX < 0 && this.x > 0)
            ){
                this.x += this.speedX;
            }
            if (
                (this.speedY > 0 && this.y < 300) || (this.speedY < 0 && this.y > 0)
            ){
                this.y += this.speedY;
            }
            
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x,this.y,this.w,this.h)
        }
    }

    class Player extends Block{
        draw(){
            console.log(this.x);
            if (
                (this.speedX > 0 && this.x < 500) || (this.speedX < 0 && this.x > 0)
            ){
                this.x += this.speedX;
            }
            if (
                (this.speedY > 0 && this.y < 700) || (this.speedY < 0 && this.y > 0)
            ){
                this.y += this.speedY;
            }
            
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x,this.y,this.w,this.h)

            if((this.x > greenBox.x && this.x < greenBox.x + greenBox.w)||(this.x+this.w > greenBox.x && this.x+this.w < greenBox.x+greenBox.w)){
                if((this.y > greenBox.y && this.y < greenBox.y + greenBox.h)||(this.y+this.h > greenBox.y && this.y+this.h < greenBox.y+greenBox.h)){
                alert("game over")
                this.x = 500;
                this.y = 700;
                this.speedX = 0;
                this.speedY = 0;
            }
           }
           if((this.x > orangeBox.x && this.x < orangeBox.x + orangeBox.w)||(this.x+this.w > orangeBox.x && this.x+this.w < orangeBox.x+orangeBox.w)){
                if((this.y > orangeBox.y && this.y < orangeBox.y + orangeBox.h)||(this.y+this.h > orangeBox.y && this.y+this.h < orangeBox.y+orangeBox.h)){
                alert("game over")
                this.x = 500;
                this.y = 700;
                this.speedX = 0;
                this.speedY = 0;
             }
            }
            if((this.x > winBox.x && this.x < winBox.x + winBox.w)||(this.x+this.w > winBox.x && this.x+this.w < winBox.x+winBox.w)){
                if((this.y > winBox.y && this.y < winBox.y + winBox.h)||(this.y+this.h > winBox.y && this.y+this.h < winBox.y+winBox.h)){
                alert("You win the game")
                this.x = 500;
                this.y = 700;
                this.speedX = 0;
                this.speedY = 0;
             }
            }
            if((this.x > orangeBox1.x && this.x < orangeBox1.x + orangeBox1.w)||(this.x+this.w > orangeBox1.x && this.x+this.w < orangeBox1.x+orangeBox1.w)){
                if((this.y > orangeBox1.y && this.y < orangeBox1.y + orangeBox1.h)||(this.y+this.h > orangeBox1.y && this.y+this.h < orangeBox1.y+orangeBox1.h)){
                alert("game over")
                this.x = 500;
                this.y = 700;
                this.speedX = 0;
                this.speedY = 0;
             }
            }
            if((this.x > greenBox1.x && this.x < greenBox1.x + greenBox1.w)||(this.x+this.w > greenBox1.x && this.x+this.w < greenBox1.x+greenBox1.w)){
                if((this.y > greenBox1.y && this.y < greenBox1.y + greenBox1.h)||(this.y+this.h > greenBox1.y && this.y+this.h < greenBox1.y+greenBox1.h)){
                alert("game over")
                this.x = 500;
                this.y = 700;
                this.speedX = 0;
                this.speedY = 0;
             }
            }
            if((this.x > roseBox.x && this.x < roseBox.x + roseBox.w)||(this.x+this.w > roseBox.x && this.x+this.w < roseBox.x+roseBox.w)){
                if((this.y > roseBox.y && this.y < roseBox.y + roseBox.h)||(this.y+this.h > roseBox.y && this.y+this.h < roseBox.y+roseBox.h)){
                alert("game over")
                this.x = 500;
                this.y = 700;
                this.speedX = 0;
                this.speedY = 0;
             }
            }
            if((this.x > blueBox.x && this.x < blueBox.x + blueBox.w)||(this.x+this.w > blueBox.x && this.x+this.w < blueBox.x+blueBox.w)){
                if((this.y > blueBox.y && this.y < blueBox.y + blueBox.h)||(this.y+this.h > blueBox.y && this.y+this.h < blueBox.y+blueBox.h)){
                alert("game over")
                this.x = 500;
                this.y = 700;
                this.speedX = 0;
                this.speedY = 0;
             }
            }
        }
    }

    const redBox = new Player('red',500,700,100,100)

    const greenBox = new Block('green',0,0,100,100)
    const orangeBox = new Block('orange',400,0,200,100)
    const orangeBox1 = new Block('orange',350,400,100,100)
    const greenBox1 = new Block('green',400,160,100,100)
    const roseBox = new Block('pink',100,200,100,100)
    const blueBox = new Block('blue',200,500,100,100)
    const winBox = new Block('black',100,0,300,25)

    let fps = 30;
    let counter = 0;
    let timer = setInterval(function(){
        ctx.clearRect(0,0,600,800)

        redBox.draw();
        greenBox.draw();
        orangeBox.draw();
        orangeBox1.draw();
        greenBox1.draw();
        roseBox.draw();
        blueBox.draw();
        winBox.draw();
        winBox.draw = function () {
            const boxSize = 20; // Size of each small box in the pattern
            for (let row = 0; row < this.h / boxSize; row++) {
                for (let col = 0; col < this.w / boxSize; col++) {
                    ctx.fillStyle = (row + col) % 2 === 0 ? 'black' : 'white';
                    ctx.fillRect(
                        this.x + col * boxSize,
                        this.y + row * boxSize,
                        boxSize,
                        boxSize
                    );
                }
            }
        };

        //counter++;
        //ctx.font = '30px Arial';
        //ctx.fillStyle = "red";
        //ctx.fillText(counter, 0,350)
        console.log('Frame');
    },1000/fps)

    document.addEventListener("keydown",(e)=>{
        console.log(e.key);
        switch(e.key){
            case "ArrowLeft":
                redBox.speedX = -10;
                break;
            case "ArrowRight":
                redBox.speedX = 10;
                break;
            case "ArrowUp":
                redBox.speedY = -10;
                break;
            case "ArrowDown":
                redBox.speedY = 10;
                break;
        }
    })

    document.addEventListener("keyup",(e)=>{
        console.log(e.key);
        switch(e.key){
            case "ArrowLeft":
                redBox.speedX = 0;
                break;
            case "ArrowRight":
                redBox.speedX = 0;
                break;
            case "ArrowUp":
                redBox.speedY = 0;
                break;
            case "ArrowDown":
                redBox.speedY = 0;
                break;
        }
    })