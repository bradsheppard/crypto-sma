'use strict';

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cryptoSMA = require('../index');


describe('Index Tests', function () {
    describe('getCurrentPrice', function () {
        it('It should return a price', async function () {
            var result = await cryptoSMA.currentPrice('BTC', 'CAD');
            _assert2.default.equal(true, result > 0);
        });
    });

    describe('getMovingAverage', function () {
        it('It should return a number', async function () {
            var result = await cryptoSMA.movingAverage('BTC', 'CAD', { limit: 5 });
            _assert2.default.equal(true, result > 0);
        });
    });

    describe('lowerBollingerBand', function () {
        it('It should return a number', async function () {
            var result = await cryptoSMA.lowerBollingerBand('BTC', 'CAD', { days: 5, offset: 2, k: 2 });
            _assert2.default.equal(true, result > 0);
        });
    });

    describe('upperBollingerBand', function () {
        it('It should return a number', async function () {
            var result = await cryptoSMA.upperBollingerBand('BTC', 'CAD', { days: 5, offset: 2, k: 2 });
            _assert2.default.equal(true, result > 0);
        });
    });
});