function setup() {
    createCanvas(1000, 1000);
    background('grey');
    noStroke();

    var x = 0;
    var y = 0;

    for (var i = 0; i < 5; i++) {
        drawShapes(x, y);
        y += 200;
    }

}

function drawShapes(startX, startY) {
    stroke(0);
    strokeWeight(6);
    line(startX, startY + 95, startX + 620, startY + 95);


    fill("#8A0808");
    triangle(startX + 40, startY + 160, startX + 120, startY + 30, startX + 192, startY + 160);
    fill('blue');
    triangle(startX + 60, startY + 150, startX + 120, startY + 40, startX + 172, startY + 150);


    fill("#8A0808");
    ellipse(startX + 300, startY + 100, 140, 140);
    fill("green");
    ellipse(startX + 300, startY + 100, 120, 120);


    fill("#8A0808");
    rect(startX + 430, startY + 40, 160, 120);
    fill("yellow");
    rect(startX + 445, startY + 50, 130, 100);


    //professor piece
    //if(myarray[i]=="square"){
    //drawSquare();

    }

//function drawTriangle(startX,startY){
    //
    //var tX1,tY1,tX2,tY2,tX3,tY3;
    //tX1 = startX;
    //tY1 = startY;
    //tX2 = tX1-28;
    //tY2 = tY1+55;
    //tX3 = tX1+28;
    //tY3 = tY1+55;
    //fill('blue');
    //triangle(tX1,tY1,tX2,tY2,tX3,tY3);
    //}
    //
    //drawTriangle(58,20);
    //
    //function drawTriangle2(startX,startY){
    //
    //var tX1,tY1,tX2,tY2,tX3,tY3;
    //tX1 = startX;
    //tY1 = startY;
    //tX2 = tX1-18;
    //tY2 = tY1+35;
    //tX3 = tX1+18;
    //tY3 = tY1+35;
    //triangle(tX1,tY1,tX2,tY2,tX3,tY3);
    //}
    //
    //
    //drawTriangle2(58,30);



//this is a test.
//function mouseisPressed(){
//    console.log('mouseClicked');
//    
//    var triangle = dist(mouseX, mouseY
//    var ellipse = dist(mouseX, mouseY
//    var rect = dist(mousex,mouse
//                        
//    if(triangle
//triangle(startX + 60, startY + 150, startX + 120, startY + 40, startX + 172, startY + 150);
//                        
//    if(ellipse
//    ellipse(startX + 300, startY + 100, 120, 120);  
//    
//    if(rect
//    fill("yellow");
//    rect(startX + 445, startY + 50, 130, 100);