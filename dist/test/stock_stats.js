'use strict';

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _stock_stats = require('../stock_stats');

var _stock_stats2 = _interopRequireDefault(_stock_stats);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Stock Stats Tests', function () {
    describe('calculateMovingAverage', function () {
        it('Returns correct moving average', function () {
            var points = [1, 2, 5, 6, 2.5];
            var actualMovingAverage = _stock_stats2.default.calculateMovingAverage(points);
            var expectedMovingAverage = 3.3;
            _assert2.default.equal(expectedMovingAverage, actualMovingAverage);
        });
    });

    describe('upperBollingerBand', function () {
        it('Returns correct upper Bollinger band', function () {
            var movingAverage = 20.5;
            var standardDeviation = 1.25;
            var k = 2;
            var actualUpperBollingerBand = _stock_stats2.default.upperBollingerBand(movingAverage, standardDeviation, k);
            var expectedUpperBollingerBand = 23;
            _assert2.default.equal(expectedUpperBollingerBand, actualUpperBollingerBand);
        });
    });

    describe('lowerBollingerBand', function () {
        it('Returns correct lower Bollinger band', function () {
            var movingAverage = 20.5;
            var standardDeviation = 1.25;
            var k = 2;
            var actualLowerBollingerBand = _stock_stats2.default.lowerBollingerBand(movingAverage, standardDeviation, k);
            var expectedLowerBollingerBand = 18;
            _assert2.default.equal(expectedLowerBollingerBand, actualLowerBollingerBand);
        });
    });
});