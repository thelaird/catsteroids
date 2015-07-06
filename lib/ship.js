(function () {

  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Ship = Asteroids.Ship = function (game) {
    Asteroids.MovingObject.call(this, {
      pos: game.randomPosition(),
      vel: [0,0],
      radius: Ship.RADIUS,
      game: game,
    });
    this.img = new Image();
    this.img.src = 'img/dog.png';
  };

  Asteroids.Utils.inherits(Ship, Asteroids.MovingObject);

  Ship.RADIUS = 35;

  Ship.prototype.draw = function (ctx) {
    ctx.drawImage(this.img, this.pos[0]-32, this.pos[1]-35);
  };

  Ship.prototype.fireBullet = function () {
    if (!this.firing) {
      this.firing = true;
      var bullet = new Asteroids.Bullet(this.game);
      this.game.bullets.push(bullet);
      setTimeout( function () {
        this.firing = false;
      }.bind(this), 300);
    }

  };

  Ship.prototype.power = function (impulse) {
    this.vel[0] += impulse[0];
    this.vel[1] += impulse[1];
  };

  Ship.prototype.relocate = function () {
    this.pos = this.game.randomPosition();
    this.vel = [0, 0];
  };
})();
