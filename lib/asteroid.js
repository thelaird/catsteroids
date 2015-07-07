(function () {

  if (window.Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Asteroid = Asteroids.Asteroid = function (pos, game) {
    Asteroids.MovingObject.call(this, {
      pos: pos,
      vel: Asteroids.Utils.randomVec(3),
      color: Asteroid.COLOR,
      radius: Asteroid.RADIUS,
      game: game
    });
    this.img = new Image();
    this.img.src = 'img/cat2.png';
  };

  Asteroid.COLOR = "#FFA500";
  Asteroid.RADIUS = 85;

  Asteroids.Utils.inherits(Asteroid, Asteroids.MovingObject);

  Asteroid.prototype.collideWith = function (otherObject) {
    if (otherObject instanceof Asteroids.Ship) {
      otherObject.relocate();
      this.game.lives -= 1;
    }
  };

  Asteroid.prototype.draw = function (ctx) {
    ctx.drawImage(this.img, this.pos[0]-90, this.pos[1]-110);
  };

})();
