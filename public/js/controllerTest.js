(function() {
  'use strict';

  var app = angular.module("controllerTest", []);

  app.controller("CartController", function(){
    this.items = new Array();

    this.newItem = new Object();
    this.newItem.quantity = 1;

    this.addItem = function(){
      this.items.push(this.newItem);

      this.newItem = new Object();
      this.newItem.quantity = 1;
    }

  })

}());
