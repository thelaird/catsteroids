(function () {

  if (window.Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var GameView = Asteroids.GameView = function (ctx) {
    this.game = new Asteroids.Game();
    this.ctx = ctx;
  };

  GameView.prototype.start = function () {
    var that = this;
    this.bindKeyHandlers();
    setInterval(function () {
      that.game.step();
      that.game.draw(that.ctx);
    }, 20);
  };

  GameView.prototype.bindKeyHandlers = function() {
    var that = this;
    key('a', function(){that.game.ship.power([-1,0]);});
    key('w', function(){that.game.ship.power([0,-1]);});
    key('d', function(){that.game.ship.power([1,0]);});
    key('s', function(){that.game.ship.power([0,1]);});
    key('space', function(){that.game.ship.fireBullet();});
  };

})();
