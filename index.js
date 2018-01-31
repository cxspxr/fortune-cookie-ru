const array = require('./array.json')

exports.get = function () {
    let len = array.length;
    let random = Math.floor(Math.random() * (len - 1));
    
    return array[random];
}
