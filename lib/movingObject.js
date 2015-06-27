(function() {

  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var MovingObject = Asteroids.MovingObject = function (varsHash) {
    this.pos = varsHash.pos;
    this.vel = varsHash.vel;
    this.radius = varsHash.radius;
    this.color = varsHash.color;
    this.game = varsHash.game;
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

    return this.game.wrap(this.pos);
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

  MovingObject.prototype.collideWith = function (otherObject) {
  };

})();
