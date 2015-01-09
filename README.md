# a-find
![Travis](https://travis-ci.org/bjarneo/array-find.svg?branch=master) <br />

Finding all the occurrences of an element in an array

###Install
```Javascript
npm install --save a-find
```

###Usage
```Javascript
var find = require('a-find');

find(['a', 'b', 'c', 'd', 'c'], 'c') // => [2, 4]

find(['a', 'b', 'c', 'd', 'c'], 'b') // => [1]
```
