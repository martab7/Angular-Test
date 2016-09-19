(function() {
  'use strict';

  var app = angular.module("controllerTest", []);

  app.controller("CartController", function(){
    var items = new Array();

    var newItem = new Object();
    newItem.quantity = 1;

    var addItem = function(){
      items.push(newItem);
      
      newItem = new Object();
      newItem.quantity = 1;
    }

  })

}());
