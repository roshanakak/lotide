const assertEqual = require('../assertEqual');
const tail = require('../tail');

assertEqual(tail([5,6,7])[0], 6);
assertEqual(tail([5,6,7])[1], 7);