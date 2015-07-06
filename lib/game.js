(function () {
  if (window.Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Game = Asteroids.Game = function (ctx) {
    this.asteroids = [];
    this.addAsteroids();
    this.ship = new Asteroids.Ship(this);
    this.bullets = [];
  };

  Game.DIM_X = 1000;
  Game.DIM_Y = 700;
  Game.NUM_ASTEROIDS = 5;

  Game.prototype.addAsteroids = function () {
    for (var i = 0; i < Game.NUM_ASTEROIDS; i++) {
      var asteroid = new Asteroids.Asteroid (this.randomPosition(), this);
      this.asteroids.push(asteroid);
    }
  };

  Game.prototype.allObjects = function () {
    return this.asteroids.concat(this.ship).concat(this.bullets);
  };

  Game.prototype.randomPosition = function () {
    var randX = Math.floor(Math.random() * Game.DIM_X);
    var randY = Math.floor(Math.random() * Game.DIM_Y);
    return [ randX, randY];
  };

  Game.prototype.draw = function(ctx) {
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    this.allObjects().forEach(function (roid) {
      roid.draw(ctx);
    });
  };

  Game.prototype.moveObjects = function () {
    this.allObjects().forEach(function (roid) {
      roid.move();
    });
  };

  Game.prototype.wrap = function (pos) {
    if (pos[0] <= 0) {
      pos[0] = Game.DIM_X;
    } else if (pos[0] >= Game.DIM_X) {
      pos[0] = 0;
    } else if (pos[1] <= 0) {
      pos[1] = Game.DIM_Y;
    } else if (pos[1] >= Game.DIM_Y) {
      pos[1] = 0;
    }

    return pos;
  };

  Game.prototype.checkCollisions = function() {
    for (var i = 0; i < this.asteroids.length; i++) {
      if (this.asteroids[i].isCollidedWith(this.ship)) {
        this.asteroids[i].collideWith(this.ship);
      }
      for (var j = 0; j < this.bullets.length; j++) {
        if (this.asteroids[i].isCollidedWith(this.bullets[j])) {
          this.bullets[j].collideWith(this.asteroids[i]);
        }
      }
    }
  };

  Game.prototype.step = function() {
    this.moveObjects();
    this.checkCollisions();
  };

  Game.prototype.remove = function (object) {
    if (object instanceof Asteroids.Asteroid) {
      this.asteroids = this.asteroids.filter(function (asteroid) {
        return asteroid !== object;
      });
    } else {
      this.bullets = this.bullets.filter(function (bullet) {
        return bullet !== object;
      });
    }
  };

})();
