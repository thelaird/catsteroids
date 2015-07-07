(function () {

  if (window.Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Asteroid = Asteroids.Asteroid = function (pos, game, radius) {
    Asteroids.MovingObject.call(this, {
      pos: pos,
      vel: Asteroids.Utils.randomVec(3),
      radius: radius,
      game: game
    });
  };

  Asteroids.Utils.inherits(Asteroid, Asteroids.MovingObject);

  Asteroid.prototype.collideWith = function (otherObject) {
    if (otherObject instanceof Asteroids.Ship) {
      var exp = new Asteroids.Explosion(otherObject.pos, this.game);
      this.game.explosions.push(exp);
      otherObject.relocate();
      this.game.lives -= 1;
    }
  };

  Asteroid.prototype.draw = function (ctx) {
    ctx.drawImage(this.img, this.pos[0] - this.radius - 10, this.pos[1] - this.radius - 20);
  };

})();
