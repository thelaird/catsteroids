(function () {

  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Ship = Asteroids.Ship = function (game) {
    Asteroids.MovingObject.call(this, {
      pos: [game.width / 2, game.height / 2],
      vel: [0,0],
      radius: Ship.RADIUS,
      game: game,
    });
    this.img = new Image();
    this.img.src = 'img/dog.png';
    this.rotation = 2;
    this.invulnerable = true;
    this.invulnerableFrames = 100;
    this.shipAlpha = 1;
    this.fadeDelta = 0.1;

  };

  Asteroids.Utils.inherits(Ship, Asteroids.MovingObject);

  Ship.RADIUS = 35;
  Ship.WIDTH = 75;
  Ship.HEIGHT = 75;
  Ship.RAD_OFFSET = -1.90;

  Ship.prototype.calculateRotation = function () {
    if (this.vel[0] !== 0 || this.vel[1] !== 0) {
      this.rotation = Math.atan2(this.vel[1], this.vel[0]);
    }
  };

  Ship.prototype.draw = function (ctx) {
    this.calculateRotation();
    if (this.invulnerable) {
      this.calcInvulnerability();
    }
    this.rotate(this.img, this.pos[0]-35, this.pos[1]-35, Ship.HEIGHT, Ship.WIDTH, this.rotation);
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

  Ship.prototype.calcInvulnerability = function () {
    if (this.invulnerableFrames === 0) {
      this.invulnerable = false;
      this.invulnerableFrames = 100;
      this.shipAlpha = 1;
    } else {
      if (this.shipAlpha >= 1 || this.shipAlpha <= 0){
        this.fadeDelta = -this.fadeDelta;
      }
      this.shipAlpha += this.fadeDelta;
      this.invulnerableFrames -= 1;
    }
  };

  Ship.prototype.power = function (impulse) {
    if (Asteroids.Utils.dist([0,0],[this.vel[0] + impulse[0], this.vel[1] + impulse[1]]) < 7) {
      this.vel[0] += impulse[0];
      this.vel[1] += impulse[1];
    }
  };

  Ship.prototype.relocate = function () {
    this.invulnerable = true;
    this.pos = [this.game.width / 2, this.game.height / 2];
    this.vel = [0, 0];
  };

  Ship.prototype.rotate = function (img,x,y,width,height,rad){
    ctx.translate(x + width / 2, y + height / 2);
    rad += Ship.RAD_OFFSET;
    ctx.rotate(rad);
    ctx.globalAlpha = this.shipAlpha;
    ctx.drawImage(img,width / 2 * (-1),height / 2 * (-1),width,height);
    ctx.globalAlpha = 1;
    ctx.rotate(rad * ( -1 ) );
    ctx.translate((x + width / 2) * (-1), (y + height / 2) * (-1));
  };
})();
