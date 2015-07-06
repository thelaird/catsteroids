(function(){
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Utils = Asteroids.Utils = function() {};

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
