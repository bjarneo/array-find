'use strict';

module.exports = function (array, needle) {
    var res = [], index;

    if (!array || !array.length || !needle) {
        return -1;
    }

    index = array.indexOf(needle);

    while (index !== -1) {
        res.push(index);

        index = array.indexOf(needle, index + 1);
    }

    return res;
};
