var _ = require('underscore.string')

exports.hello = function (person) {
  console.log('Hola' + _.capitalize(person) +'!');
}