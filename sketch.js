var mouses =[];
var arts =[];
var message= "";

// ArrayList<PVector> mouses = new ArrayList<PVector>();
// ArrayList<ArrayList<PVector>> arts = new ArrayList<ArrayList<PVector>>();
// PFont myFont;

// setup function is called only once at the beginning

function setup() {

	createCanvas(1000, 700);

}


// draw function is called every frame

function draw() {
  background('#0AE8F2');
   //Chalk bord bord

  fill('#24762E');
  rect(200, 10, 700, 350); 
    //Chalk bord bord
  noStroke();
  fill('#24762E');
  rect(200, 10, 700, 350); 
  //chalk dust
  stroke('#EBFAF5');
  strokeWeight(1);

  beginShape();
  vertex(260, 60);
  vertex(300, 103);
  vertex(600, 200);
  vertex(350, 300);
  vertex(200, 350);
  endShape();

  //greffety
  fill('#FF5E00');

  text(message, 199, 200, 700, 200);

  //mouth and teeth experement
  push();
  translate(600, 250);
  rotate(PI/7.0);
  fill('#010504');
  ellipse(80, -60, 40, 30);  
  pop();


  // left eye
  push();
  translate(550+200, 50+50);
  rotate(-PI/3);
  strokeWeight(2);
  stroke('#24762E');
  fill('#ffffff');
  arc( 0, 0, 200, 200, 0, PI, PIE);

  //pupel
  fill('#050005');
  ellipse(0, 30, 90, 70);

  pop();

  push();
  translate(550+200, 50+50);
  rotate(-PI/3);
  noStroke();
  fill('#24762E');
  arc( 0, 0, 200, 50, 0, PI, PIE);
  pop();
  // right eye
  push();
  translate(500+200, 50+50);
  rotate(-PI/3);
  strokeWeight(2);
  stroke('#24762E');
  fill('#ffffff');
  arc( 0, 0, 200, 200, 0, PI, PIE);

  //pupel
  fill('#050005');
  ellipse(0, 35, 90, 70);

  pop();



  push();
  translate(500+200, 50+50);
  rotate(-PI/3);
  noStroke();
  fill('#24762E');
  arc( 0, 0, 200, 40, 0, PI, PIE);
  pop();




  // Legs 
  fill ('#080101');
  rect( 241, 345, 26, 299);

  //legR
  rect( 800, 345, 26, 299);

  //feet
  fill('#EA8F34');
  arc(250, 700, 150, 150, PI, 2*PI, PIE);
  arc(800, 700, 150, 150, PI, 2*PI, PIE);

//eye
triangle(470, 30, 400, 300, 200, 200);
 

  //a little freand 
  //head
  push();
  translate(280, 220);
  scale(0.5);
  rotate(PI/3.0);

  fill('#BBB3CB');
  ellipse(0, -30, 70, 70);
  //little buddy body
  // line(299,250,2,10);

  // body 
  rect(-15, 0, 33, 135);

  // arms
  rect(-30, 30, 100, 50);

  // incoregment thum
  rect(59, 23, 10, 19);
//legs 
  //fill(#FF4400);
  rect( -2, 135, 33, 22); 
  //fill(#FF00D5);
  rect( -39, 135, 33, 22); 

  pop();

  //stroke(#ff0000);
  line(250, 60, 550, 70);

  //art pads
  noFill();
  stroke('#BBB3CB');
  strokeWeight(10);

  // objects you already drew
  // beginShape();
  // for ( var i=0; i< arts.length; i++) {

  //   for ( var j=0; j< arts[i].length; j++) {
  //     Vector p = arts[i][j];
  //     vertex(p.x, p.y);
  //   }
  // }
  // endShape();

  // current drawing

  // beginShape();
  // for ( var i=0; i< mouses.length; i++) {
  //   Vector p = mouses[i];
  //   vertex(p.x, p.y);
  // }
  // endShape();


}
function keyPressed()
{
  if ( key == BACKSPACE) {
    if ( message.length() >0 ) {
      message = message.substring(0, message.length()-1);  
      return;
    }
  }

  // if (key == CODED) {
    if (keyCode == SHIFT) {
      println("shift key is pressed");
      // screenshot
      save("chalkBoard.png");

      return;
    }
  // }

  message += key;
}