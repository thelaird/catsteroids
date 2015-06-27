(function(){
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Utils = Asteroids.Utils = function() {};

  Asteroids.Utils.inherits = function(ChildClass, ParentClass) {
    function Surrogate(){}
    Surrogate.prototype = ParentClass.prototype;
    ChildClass.prototype = new Surrogate();
  };

  Asteroids.Utils.randomVec = function(length) {
    var randX = Math.floor(Math.random() * length) + 1;
    var randY = Math.floor(Math.random() * length) + 1;
    return [randX, randY];
  };
})();
