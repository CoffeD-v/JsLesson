"use strict";

function HashTable() {
    var table = [];

    // generate number based on each char ASCII value that composes the key
    var loseloseHashCode = function (key) {
        var hash = 0;
        for (var i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % 37;
    };

    // add a new item to the hash table
    this.put = function (key, value) {
        var position = loseloseHashCode(key);
        console.log(position + ' - ' + key);
        table[position] = value;
    };

    // remove a value from the hash table by accessing desired position and assigning undefined to it
    this.remove = function (key) {
        table[loseloseHashCode(key)] = undefined;
    };

    // get value by key
    this.get = function (key) {
        return table[loseloseHashCode(key)];
    };

    this.print = function () {
        for (var i = 0; i < table.length; ++i) {
            if(table[i] !== undefined){
                console.log(i + ': ' + table[i]);
            }
        }
    }

}

var hash = new HashTable();

hash.put('Bucky', 'kyuck@gmail.com');
hash.put('Corey', 'corty@hotmail.com');
hash.put('Lisa', 'lisy@yahoo.com');

console.log('----------');

console.log(hash.get('Kyuck'));
console.log(hash.get('Corty'));
console.log(hash.get('Lisy'));

console.log('----------');

hash.print();