'use strict';

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Tests', function () {
    describe('getCurrentPrice', function () {
        it('It should return a price', async function () {
            var result = await _index2.default.currentPrice('BTC', 'CAD');
            _assert2.default.equal(true, result > 0);
        });
    });

    describe('getMovingAverage', function () {
        it('It should return a number', async function () {
            var result = await _index2.default.movingAverage('BTC', 'CAD', { limit: 5 });
            _assert2.default.equal(true, result > 0);
        });
    });
}).timeout(5000);