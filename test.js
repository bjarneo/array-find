'use strict';

/* global describe, it */
var assert = require('assert'),
    find = require('./index'),
    arr = ['a', 'b', 'c', 'a', 'd', 'c'];



describe('array find', function () {
    it('Should return an array of indexes', function () {
        var idx = find(arr, 'c');

        assert.equal(arr[idx[0]], 'c');
        assert.equal(arr[idx[1]], 'c');
    });

    it('Should return -1 if no string is passed', function () {
        var idx = find(arr);

        assert.equal(idx, -1);
    });

    it('Should return -1 if empty string is passed', function () {
        var idx = find(arr, '');

        assert.equal(idx, -1);
    });

    it('Should return -1 if no array is passed', function () {
        var idx = find();

        assert.equal(idx, -1);
    });

    it('Should return -1 if empty array is passed', function () {
        var idx = find([]);

        assert.equal(idx, -1);
    });


    it('Should return -1 if empty array and string is passed', function () {
        var idx = find([], '');

        assert.equal(idx, -1);
    });
});
