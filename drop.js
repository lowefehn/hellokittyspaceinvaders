function Drop(x, y) {
  this.x = x;
  this.y = y;
  this.r = 8;
  this.toDelete = false;

  this.show = function() {
    noStroke();
    fill(0, 255, 0);
    rect(this.x, this.y, this.r * 2, this.r * 2);
  };

  this.evaporate = function() {
    this.toDelete = true;
  };

  this.hits = function(target) {
    var d = dist(this.x, this.y, target.x, target.y);
    if (d < this.r + target.r) {
      return true;
    } else {
      return false;
    }
  };

  this.move = function() {
    this.y = this.y - 10;
  };
}
