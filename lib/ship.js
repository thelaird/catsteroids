(function () {

  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Ship = Asteroids.Ship = function (game) {
    Asteroids.MovingObject.call(this, {
      pos: game.randomPosition(),
      vel: [0,0],
      color: Ship.COLOR,
      radius: Ship.RADIUS,
      game: game
    });
  };

  Asteroids.Utils.inherits(Ship, Asteroids.MovingObject);

  Ship.RADIUS = 5;
  Ship.COLOR = "#0000FF";

  Ship.prototype.relocate = function () {
    this.pos = this.game.randomPosition();
    this.vel = [0, 0];
  };

  Ship.prototype.power = function (impulse) {
    this.vel[0] += impulse[0];
    this.vel[1] += impulse[1];
  };

  Ship.prototype.fireBullet = function () {
    var bullet = new Asteroids.Bullet(this.game);
    this.game.bullets.push(bullet);

  };

})();
