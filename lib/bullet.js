( function (){

  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }



  var Bullet = Asteroids.Bullet = function (game) {
    Asteroids.MovingObject.call(this, {
      pos: [game.ship.pos[0], game.ship.pos[1] + game.ship.radius],
      vel: this.setVel(game.ship.vel),
      color: game.ship.COLOR,
      radius: Asteroids.Bullet.RADIUS,
      game: game
    });
  };

  Asteroids.Bullet.RADIUS = 2;
  Asteroids.Bullet.SPEED = 10;

  Asteroids.Utils.inherits(Bullet, Asteroids.MovingObject);

  Bullet.prototype.collideWith = function (otherObject) {
    if (otherObject instanceof Asteroids.Asteroid) {
      this.game.remove(otherObject);
      this.game.remove(this);
    }
  };

  Bullet.prototype.isWrappable = false;

  Bullet.prototype.setVel = function (shipVel) {
    var length = Asteroids.Utils.dist([0,0], shipVel);
    return [shipVel[0] / length * Bullet.SPEED,
      shipVel[1] / length * Bullet.SPEED];
  };

})();
