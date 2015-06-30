( function (){

  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Bullet = Asteroids.Bullet = function (game) {
    Asteroids.MovingObject.call(this, {
      pos: [game.ship.pos[0], game.ship.pos[1] + game.ship.radius],
      vel: [game.ship.vel[0] * 1.5, game.ship.vel[1] * 1.5],
      color: game.ship.COLOR,
      radius: 1,
      game: game
    });
  };

  Asteroids.Utils.inherits(Bullet, Asteroids.MovingObject);

  Bullet.prototype.collideWith = function (otherObject) {
    if (otherObject instanceof Asteroids.Asteroid) {
      this.game.remove(otherObject);
      this.game.remove(this);
    }
  };

})();
