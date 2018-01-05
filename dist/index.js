'use strict';

var _cryptocompare = require('cryptocompare');

var _cryptocompare2 = _interopRequireDefault(_cryptocompare);

var _nodeFetch = require('node-fetch');

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

var _statsLite = require('stats-lite');

var _statsLite2 = _interopRequireDefault(_statsLite);

var _stock_stats = require('./stock_stats');

var _stock_stats2 = _interopRequireDefault(_stock_stats);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

global.fetch = _nodeFetch2.default;

function roundResult(number) {
    return parseFloat(number.toFixed(4));
}

async function currentPrice(coin, currency) {
    var result = await _cryptocompare2.default.priceMulti([coin], [currency]);
    return roundResult(result[coin][currency]);
}

async function movingAverage(coin, currency, options) {
    var days = options.days,
        offset = options.offset;

    var cryptoOptions = { limit: days - 1 };
    if (offset) {
        var dateOffset = new Date();
        dateOffset.setDate(dateOffset - offset);
        cryptoOptions.timestamp = dateOffset;
    }
    var priceHistory = await _cryptocompare2.default.histoDay(coin, currency, cryptoOptions);
    var closeHistory = priceHistory.map(function (value) {
        return parseFloat(value.close);
    });
    return roundResult(_stock_stats2.default.calculateMovingAverage(closeHistory));
}

async function upperBollingerBand(coin, currency, options) {
    var days = options.days,
        offset = options.offset,
        k = options.k;

    var priceHistory = await _cryptocompare2.default.histoDay(coin, currency, { days: days, offset: offset });
    var closeHistory = priceHistory.map(function (value) {
        return parseFloat(value.close);
    });

    var params = getBollingerBandParameters(closeHistory);
    return roundResult(_stock_stats2.default.upperBollingerBand(params.movingAverage, params.standardDeviation, k));
}

async function lowerBollingerBand(coin, currency, options) {
    var days = options.days,
        offset = options.offset,
        k = options.k;

    var priceHistory = await _cryptocompare2.default.histoDay(coin, currency, { days: days, offset: offset });
    var closeHistory = priceHistory.map(function (value) {
        return value.close;
    });

    var params = getBollingerBandParameters(closeHistory);
    return roundResult(_stock_stats2.default.lowerBollingerBand(params.movingAverage, params.standardDeviation, k));
}

function getBollingerBandParameters(closeHistory) {
    var movingAverage = _stock_stats2.default.calculateMovingAverage(closeHistory);
    var standardDeviation = _statsLite2.default.stdev(closeHistory);

    return { movingAverage: movingAverage, standardDeviation: standardDeviation };
}

module.exports = {
    currentPrice: currentPrice,
    movingAverage: movingAverage,
    lowerBollingerBand: lowerBollingerBand,
    upperBollingerBand: upperBollingerBand
};