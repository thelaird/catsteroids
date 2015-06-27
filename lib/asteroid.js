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
  };

  Asteroid.COLOR = "#FFA500";
  Asteroid.RADIUS = 20;

  Asteroids.Utils.inherits(Asteroid, Asteroids.MovingObject);

  Asteroid.prototype.collideWith = function (otherObject) {
    if (otherObject instanceof Asteroids.Ship) {
      otherObject.relocate();
    }
  };

})();
