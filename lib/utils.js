(function(){
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Utils = Asteroids.Utils = function() {};

  Utils.dist = function (pos1, pos2) {
    var dist = Math.sqrt(Math.pow(pos1[0] - pos2[0], 2) + Math.pow(pos1[1] - pos2[1], 2));
    return dist;
  };

  Utils.inherits = function(ChildClass, ParentClass) {
    function Surrogate(){}
    Surrogate.prototype = ParentClass.prototype;
    ChildClass.prototype = new Surrogate();
  };

  Utils.randomVec = function(length) {
    var deg = 2 * Math.PI * Math.random();
    return [Math.sin(deg) * length, Math.cos(deg) * length];
  };
})();
