(function () {

  if (window.Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var GameView = Asteroids.GameView = function (ctx) {
    this.game = new Asteroids.Game(ctx);
    this.ctx = ctx;
  };

  GameView.prototype.bindKeyHandlers = function() {
    var that = this;
    key('a', function(){that.game.ship.power([-1,0]);});
    key('w', function(){that.game.ship.power([0,-1]);});
    key('d', function(){that.game.ship.power([1,0]);});
    key('s', function(){that.game.ship.power([0,1]);});
    key('space', function(){that.game.ship.fireBullet();});
  };

  GameView.prototype.end = function (interval) {
    clearInterval(interval);
    this.ctx.clearRect(0, 0, this.game.width, this.game.height);
  };

  GameView.prototype.start = function () {
    this.bindKeyHandlers();
    var interval = setInterval(function () {
      this.game.step();
      this.game.draw(this.ctx);
      if (this.game.lives === 0) {
        this.end(interval);
      }
    }.bind(this), 20);
  };


})();
