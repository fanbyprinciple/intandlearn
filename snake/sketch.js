let snake;
let rez = 20;
let food;
let w;
let h;
let bg_color
let inside 

function setup() {
  createCanvas(360, 600);
  console.log(width)
  w = floor(width / rez);
  h = floor(400 / rez);
  bg_color = 220
  inside = false
  frameRate(5);
  snake = new Snake();
  foodLocation();
}

function foodLocation() {
  let x = floor(random(w));
  let y = floor(random(400/rez));
  food = createVector(x, y);

}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    snake.setDir(-1, 0);
  } else if (keyCode === RIGHT_ARROW) {
    snake.setDir(1, 0);
  } else if (keyCode === DOWN_ARROW) {
    snake.setDir(0, 1);
  } else if (keyCode === UP_ARROW) {
    snake.setDir(0, -1);
  } else if (key == ' ') {
    snake.grow();
  }

}

function insideRect(rect_coords){
  
  for(let i =0; i <rect_coords.length; ++i){
      let current = rect_coords[i]
      if(mouseX > current[0] && mouseX < current[0] + current[2]){
        if(mouseY > current[1] && mouseY < current[1] + current[3]){
          
          if (i == 2) {
              snake.setDir(-1, 0);
            } else if (i == 3) {
              snake.setDir(1, 0);
            } else if (i == 1) {
              snake.setDir(0, 1);
            } else if (i == 0) {
              snake.setDir(0, -1)
            }
          
          return true
        }
      }
  }
  
  return false
    
}

function draw() {
  scale(rez);
  if(inside){
    bg_color = 60
  } else {
    bg_color = 180
  }
  
  background(220);
  
  textSize(20 /rez);
  textAlign(CENTER, CENTER);
  fill(255)
  text('snake game? ', 380/2/rez, 360/rez)
  
  
  
  if (snake.eat(food)) {
    foodLocation();
  }
  snake.update();
  snake.show();
  
  fill(0,bg_color,180)
  
  rect(0/rez,400/rez,w,200/rez)
  fill(180)
  rect(100/rez,420/rez, 160/rez,50/rez) //100,420,160,50
  rect(100/rez,500/rez, 160/rez,50/rez) //100,500,160,50
  rect(40/rez,420/rez, 40/rez,130/rez)  //40,420,40,130
  rect(280/rez,420/rez, 40/rez,130/rez) //280,420,40,130
  
  textSize(40 /rez);
  textAlign(CENTER, CENTER);
  fill(60)
  text('L', 60/rez, 480/rez);
  text('R', 295/rez, 480/rez);
  text('U', 175/rez, 450/rez);
  text('D', 175/rez, 530/rez);

  
  rect_coords = [[100,420,160,50], 
                 [100,500,160,50], 
                 [40,420,40,130],
                 [280,420,40,130]]

  inside = insideRect(rect_coords)
  
  
  //console.log(mouseX, mouseY)
  if (snake.endGame()) {
    print("END GAME");
    background(255, 0, 0);
    noLoop();
  }

  noStroke();
  fill(255, 0, 0);
  rect(food.x, food.y, 1, 1);
}