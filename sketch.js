let intro;
let ch;
let door;
let x;
let win;
let caught;


let state = 0;
let nextState = 0;
let counter = 0;
let typed = "";
let story = "";
let rectWidth;

function preLoad() { 
  intro = loadImage('first.jpeg');
  ch = loadGif('char.gif');
  door = loadImage('door.jpg');
  x = loadImage('art.gif');
  win = loadImage('final.jpg');
  caught = loadImage('caught.jpg');
  
}

function setup() {
  
  createCanvas(1024, 768);
  textFont("Helvetica");
  textSize(22);
  
  fill(200);
  noStroke();
  rectWidth = width / 4;

  intro = loadImage('first.jpeg');
  ch = loadImage('char.gif');
  door = loadImage('door.jpg');
  x = loadImage('art.gif');
  win = loadImage('final.jpg');
  caught = loadImage('caught.jpg');
}

function draw() {
  
  text("APPLE MONSTER", 0, 0, 200, 200);
  text("SOME COMMANDS = begin, go, apple", 0, 100, 500, 200);

  if (state == nextState) {

    if (state == 0) {
      image(intro, 200, height / 4, intro.width / 2, intro.height / 2);
    } 
    else if (state == 1) {
      image(ch, 200, height / 4, ch.width / 2, ch.height / 2);
    } 
    else if (state == 2) {
      image(door, 200, height / 4, door.width / 2, door.height / 2);
         
    } 
    else if (state == 3) {
      image(x, 200, height / 4, x.width / 2, x.height / 2);
    }
    else if (state == 4) {
      image(win, 200, height / 1, win.width / 1, win.height / 1);
    }
    else if (state == 5) {
      image(caught, 200, height / 4, caught.width / 8, caught.height / 8);
    }
  } 
  else {
    counter++;
    if (counter == 30) {
      state = nextState;
      counter = 0;
    }

    let a = map(counter, 0, 30, 0, 255);
    tint(255, a);
    if (nextState == 0) {
      image(intro, 200, height / 4, intro.width / 2, intro.height / 2);
    } 
    else if (nextState == 1) {
      image(ch, 200, height / 4, ch.width / 2, ch.height / 2);
    } 
    else if (nextState == 2) {
      image(door, 200, height / 4, door.width / 2, door.height / 2);
    } 
    else if (nextState == 3) {
      image(x, 200, height / 4, x.width / 2, x.height / 2);
    }
    else if (nextState == 4) {
      image(win, 200, height / 4, win.width / 2, win.height / 2);
    }
    else if (nextState == 5) {
      image(caught, 200, height / 4, caught.width / 8, caught.height / 8);
    }

    tint(255, 255 - a);
    if (state == 0) {
      image(intro, 200, height / 4, intro.width / 2, intro.height / 2);
    } 
    else if (state == 1) {
      image(ch, 200, height / 4, ch.width / 2, ch.height / 2);
    } 
    else if (state == 2) {
      image(door, 200, height / 4, door.width / 2, door.height / 2);
    } 
    else if (state == 3) {
      image(x, 200, height / 4, x.width / 2, x.height / 2);
     
    }
    else if (state == 4) {
      image(win, 200, height / 4, win.width / 2, win.height / 2);
    }
    else if (state == 5) {
      image(caught, 200, height / 4, caught.width / 8, caught.height / 8);
    }
  }
  text(typed, 0, 650, width, 30);
  text(story, 0, 600, width, 30);
}

function keyPressed() {
  
  if (keyCode == BACKSPACE) {
    typed = '';
  }
  
  let keyIndex = -1;
  if (key >= 'a' && key <= 'z') {
    keyIndex = key.charCodeAt(0) - 'a'.charCodeAt(0);
  }
  if (keyIndex === -1) {
    // If it's not a letter key, clear the screen
    background(230);
  } else {
    // It's a letter key, fill a rectangle
    randFill_r = Math.floor(Math.random() * 255 + 1);
    randFill_g = Math.floor(Math.random() * 255 + 1);
    randFill_b = Math.floor(Math.random() * 255 + 1);
    fill(randFill_r, randFill_g, randFill_b);
    let x = map(keyIndex, 0, 25, 0, width - rectWidth);
    rect(x, 0, rectWidth, height);
  }
  
}

function keyTyped() {
  if (key == '0') {
    nextState = 0;
  } 
  else if (key == '1') {
    nextState = 1;
  } 
  else if (key == '2') {
    nextState = 2;
  } 
  else if (key == '3') {
    nextState = 3;
  } 
  else if (key == '4') {
    nextState = 4;
  }
  else if (key == '5') {
    nextState = 5;
  }
  else if (keyCode == RETURN) {
    
    if (typed == 'go')  {    
      nextState = 1;
      typed = '';
      story = "This Is YOU! ,, U have to run from the apple moster otherwise it'll eat you"    
    } 
    
    else if (typed == 'begin') {
      nextState = 0;
      typed = '';
      story = "..WELCOME..YOU ARE AN APPLE, BEWARE OF THE APPLE MONSTER" 
    } 
    else if (typed != 'go' || typed != 'begin') {
      
    if (typed == 'apple') {
      nextState = 2;
      typed = '';
      story = "hurry up! the apple moster is after you! type the password to escape the room"
      
    } 
    
    else if (typed == 'door') {
      nextState = 3;
      typed = '';
      story = "well done,, apples are red violets are blue whats my favorite color do you know?? "
    }
    
    else if (typed == 'red') {
      nextState = 4;
      typed = '';
      story = "well played! u escaped the apple monster... "
    }
      else {
        nextState = 5;
        typed = '';
        story = "APPLE MONSTER CAUGHT YOU!! Keep in mind the commands given and the hints in the images"
      }
    
    }
  } 
  else {
    typed += key;
  }
}
