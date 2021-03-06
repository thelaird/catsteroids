(function () {

  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }



  var Bullet = Asteroids.Bullet = function (game) {
    Asteroids.MovingObject.call(this, {
      pos: this.setPos(game.ship),
      vel: this.setVel(game.ship.vel),
      color: "#FFFFFF",
      radius: Asteroids.Bullet.RADIUS,
      game: game
    });
  };

  Asteroids.Bullet.RADIUS = 3;
  Asteroids.Bullet.SPEED = 10;

  Asteroids.Utils.inherits(Bullet, Asteroids.MovingObject);

  Bullet.prototype.collideWith = function (otherObject) {
    if (otherObject instanceof Asteroids.Asteroid) {
      var exp = new Asteroids.Explosion(otherObject.pos, this.game);
      this.game.explosions.push(exp);
      this.game.remove(otherObject);
      this.game.remove(this);
    }
  };

  Bullet.prototype.isWrappable = false;

  Bullet.prototype.setPos = function (ship) {
    var x = Math.cos(Math.atan2(ship.vel[1], ship.vel[0])) * ship.radius + ship.pos[0];
    var y = Math.sin(Math.atan2(ship.vel[1], ship.vel[0])) * ship.radius + ship.pos[1];

    return [x,y];
  };

  Bullet.prototype.setVel = function (shipVel) {
    var length = Asteroids.Utils.dist([0,0], shipVel);
    return [shipVel[0] / length * Bullet.SPEED,
      shipVel[1] / length * Bullet.SPEED];
  };

})();
