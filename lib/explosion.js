(function () {
  if (window.Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Explosion = Asteroids.Explosion = function (ctx) {
    this.ctx = ctx;
    this.height = 100;
    this.width = 100;
    this.image = 'img/explosion.png';
  };

  Explosion.prototype.render = function () {
    this.ctx.drawImage(this.image, 0, 0, this.width, this.height, 0,0,this.width,this.height);
  };
})();
