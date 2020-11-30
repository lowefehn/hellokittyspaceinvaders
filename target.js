function Target(x, y) {
  this.x = x;
  this.y = y;
  this.r = 60;
  this.xdir = 3;
  this.toExplode = false;



  this.show = function() {
    imageMode(CENTER);
    image(kuromi, this.x, this.y,this.r * 2, this.r * 2);
  //   noStroke();
  //   fill(255, 0, 200, 150);
  //   ellipse(this.x, this.y, this.r * 2, this.r * 2);
  // 
  }
    


this.explode= function(){
  this.toExplode=true;
} 
    


  this.shiftDown = function() {
    this.xdir *= -1;
    this.y += this.r;
  };

  this.move = function() {
    this.x = this.x + this.xdir;
  }
}

