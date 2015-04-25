/*global console:false*/
"use strict";
(function() {
  function sayHi() {
    return "hi";
  }
  window.mulani |= {};
  window.mulani.sample |= {};
  window.mulani.sample.sayHello = function() {
    console.log("Hello world!" + sayHi());
  };
})();