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
    key('a, left', function(){that.game.ship.power([-1,0]);});
    key('w, up', function(){that.game.ship.power([0,-1]);});
    key('d, right', function(){that.game.ship.power([1,0]);});
    key('s, down', function(){that.game.ship.power([0,1]);});
    key('space', function(){that.game.ship.fireBullet();});
  };

  GameView.prototype.drawEnd = function () {
    this.ctx.fillStyle = "rgba(0, 0, 0, 0.4)";
    this.ctx.fillRect(0, 0, this.game.width, this.game.height);
    this.ctx.fillStyle = "#FFFFFF";
    this.ctx.fillRect(this.game.width / 2 - 100, this.game.height / 2 - 25, 200, 75);
    this.ctx.fillStyle = "#111111";
    this.ctx.font = "30px Open Sans";
    this.ctx.textAlign = "center";
    this.ctx.fillText("Game Over", this.game.width / 2, this.game.height / 2 + 10);
  }

  GameView.prototype.end = function (interval) {
    clearInterval(interval);
    this.drawEnd();
    if (this.game.lives === 0) {
      this.lose();
    } else {
      this.win();
    }
  };

  GameView.prototype.lose = function () {
    this.ctx.fillStyle = "red";
    this.ctx.fillText("You Lose!", this.game.width / 2, this.game.height / 2 + 40);
  };

  GameView.prototype.start = function () {
    this.bindKeyHandlers();
    var interval = setInterval(function () {
      this.game.step();
      this.game.draw(this.ctx);
      if (this.game.lives === 0 || this.game.asteroids.length === 0) {
        this.end(interval);
      }
    }.bind(this), 20);
  };

  GameView.prototype.win = function () {
    this.ctx.fillStyle = '#238023';
    this.ctx.fillText("You Win!", this.game.width / 2, this.game.height / 2 + 40);
  };


})();
