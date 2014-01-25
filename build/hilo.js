// ========================= 
//  - 0.0.0
// ========================= 
// 2013-12-08
// http://erikroyall.github.com/hilo/
// Copyright (c) 2013 Erik Royall
// Licensed under GPL and MIT (see LICENSE) 

(function (A, M, D) {

  // Asynchronous Module Definition, if available

  /*globals YUI: false, module: false, define: false*/

  if (typeof module !== "undefined" && module.exports) {
    module.exports = D;
  } else if (typeof define === "function" && define.amd) {
    define(D);
  } else if (typeof YUI === "function") {
    YUI.add(A, D);
  } else {
    M[A] = D();
  }
}("Hilo", this, function () {
  
  "use strict";

  var win = window
    , doc = document;

  
  win.Hilo = Hilo;

}));