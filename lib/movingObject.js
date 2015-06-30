(function() {

  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var MovingObject = Asteroids.MovingObject = function (options) {
    this.pos = options.pos;
    this.vel = options.vel;
    this.radius = options.radius;
    this.color = options.color;
    this.game = options.game;
  };

  MovingObject.prototype.draw = function (ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();

    ctx.arc(
      this.pos[0],
      this.pos[1],
      this.radius,
      0,
      2 * Math.PI,
      false
    );

    ctx.fill();
  };

  MovingObject.prototype.move = function () {
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
    if (this.pos[0] > Asteroids.Game.DIM_X || this.pos[1] > Asteroids.Game.DIM_Y ||
      this.pos[0] < 0 || this.pos[1] < 0) {
        
        if (this.isWrappable) {
          return this.game.wrap(this.pos);
        } else {
          this.game.remove(this);
        }
    }
  };

  MovingObject.prototype.isCollidedWith = function(otherObject) {
    var dist =  Math.sqrt(Math.pow((this.pos[0] - otherObject.pos[0]),2) +
      Math.pow((this.pos[1] - otherObject.pos[1]),2));
    var sumRadii = this.radius + otherObject.radius;

    if (dist < sumRadii) {
      return true;
    } else {
      return false;
    }
  };

  MovingObject.prototype.isWrappable = true;

  MovingObject.prototype.collideWith = function (otherObject) {
  };

})();
