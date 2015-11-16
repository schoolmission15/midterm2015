var r1, g1, b1, r2, g2, b2, r3, g3, b3;

function setup() {
    createCanvas(windowWidth, windowHeight);
    // Pick colors randomly
    r = random(255);
    g = random(255);
    b = random(255);
}


function draw() {
    background('grey');
   
    
    var x = 0;
    var y = 0;
   
    var gridwidth = width - 100;
    
    for(var i = 0; i < 50; i ++)
    {
        console.log(i);
        drawPattern(x, y);
      
        // increment our x
        x += 720;
           
        //check if x is past the grid width
        
        if(x > gridwidth) {
        //set x back to the beginning
            x= 0;
            y += 250;
            
        } //end if
        
    } //end for loop

    
  
} // end draw function



function drawPattern(startX, startY) { 
    
    strokeWeight(2);
    stroke(r, g, b);
    push();
    fill(r1, g1, b1, 127);
    ellipse(startX + 420, startY + 200, 200, 200);
    pop();
    push();
    fill(r2, g2, b2, 127);
    rect(startX + 580, startY + 100, 200, 200);
    pop();
    push();
    fill(r3, g3, b3, 127);
    triangle(startX + 100, startY + 300, startX + 300,startY + 300, startX + 200, startY + 100);
    pop();
    
}

// When the user clicks the mouse
function mousePressed() {
    // Check if mouse is inside the circle
    var d1 = dist(mouseX, mouseY, 420, 200);
    var d2 = dist(mouseX, mouseY, 680, 200);
    var d3 = dist(mouseX, mouseY, 200, 200);


    if (d1 < 100) {
        // Pick new random color values
        r1 = random(255);
        g1 = random(255);
        b1 = random(255);
    }
    
    else if (d2 < 100) {
        // Pick new random color values
        r2 = random(255);
        g2 = random(255);
        b2 = random(255);
    }
    
     else if (d3 < 100) {
        // Pick new random color values
        r3 = random(255);
        g3 = random(255);
        b3 = random(255);
    }
}

