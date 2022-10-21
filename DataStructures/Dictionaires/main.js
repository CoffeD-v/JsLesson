"use strict";

function Dictionary() {
  var items = {};

  // set value to key property of items object
  this.set = function (key, value) {
    items[key] = value;
  };

  // first search for key then delete it
  this.delete = function (key) {
    if (this.has(key)) {
      delete items[key];
      return true;
    }
    return false;
  };

  this.has = function (key) {
    return key in items;
  };

  // if value exists then return it, if not return undefined
  this.get = function (key) {
    return this.has(key) ? items[key] : undefined;
  };

  this.getItems = function () {
    return items;
  };

  // to return the size of the array, you calculate the size of all the keys
  this.size = function () {
    return Object.keys(items).length;
  };

  this.keys = function () {
    return Object.keys(items);
  };

  // to return an array of values only, iterate through all items and access values via the keys
  this.values = function () {
    var values = [];
    for (var k in items) {
      if (this.has(k)) {
        values.push(items[k]);
      }
    }
    return values;
  };
}

var dict = new Dictionary();

dict.set("Bucky", "bucky@hotmail.com");
dict.set("Sally", "sally@gmail.com");
dict.set("Tuna", "tuna@aol.com");
console.log(dict.keys());
console.log(dict.values());
console.log(dict.get("Bucky"));

console.log("----------");

dict.delete("Sally");
console.log(dict.keys());
console.log(dict.values());

console.log("----------");

console.log(dict.getItems());
console.log(dict.size());
