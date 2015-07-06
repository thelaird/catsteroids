(function () {
  if (window.Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Explosion = Asteroids.Explosion = function (pos, game) {
    this.height = 64;
    this.width = 64;
    this.image = new Image();
    this.image.src = 'img/explosion.png';
    this.pos = pos;
    this.game = game;
    this.count = 0;
    this.frameIndex = 0;
    this.src = [0,0];
    this.ticksPerFrame = 1;
  };

  Explosion.prototype.draw = function (ctx) {
    this.update();
    if (this.frameIndex <= 25) {
      ctx.drawImage(
        this.image,
        this.src[0],
        this.src[1],
        this.width,
        this.height,
        this.pos[0]-90,
        this.pos[1]-110,
        this.width * 2.5,
        this.height * 2.5
        );
    } else {
      this.game.remove(this);
    }
  };

  Explosion.prototype.incrementFrameIndex = function () {
    this.count += 1;
    if (this.count > this.ticksPerFrame) {
      this.count = 0;
      this.frameIndex += 1;
    }
  };

  Explosion.prototype.setSpriteSource = function () {
    this.src = [this.frameIndex % 5 * 64, Math.floor(this.frameIndex / 5) * 64];
  };

  Explosion.prototype.update = function () {
    this.incrementFrameIndex();
    this.setSpriteSource();
  };
})();
