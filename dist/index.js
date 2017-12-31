'use strict';

var _cryptocompare = require('cryptocompare');

var _cryptocompare2 = _interopRequireDefault(_cryptocompare);

var _nodeFetch = require('node-fetch');

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

global.fetch = _nodeFetch2.default;

async function currentPrice(coin, currency) {
    var result = await _cryptocompare2.default.priceMulti([coin], [currency]);
    return result[coin][currency].toFixed(4);
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
    var result = await _cryptocompare2.default.histoDay(coin, currency, cryptoOptions);
    var sum = 0;
    result.forEach(function (value) {
        sum += value.close;
    });
    return (sum / result.length).toFixed(4);
}

async function movingAverageDelta(coin, currency, options) {
    var interval1 = options.interval1,
        interval2 = options.interval2,
        offset = options.offset;

    var results = [await movingAverage(coin, currency, { days: interval1, offset: offset }), await movingAverage(coin, currency, { days: interval2, offset: offset })];

    return (results[0] - results[1]).toFixed(4);
}

module.exports = {
    currentPrice: currentPrice,
    movingAverage: movingAverage,
    movingAverageDelta: movingAverageDelta
};