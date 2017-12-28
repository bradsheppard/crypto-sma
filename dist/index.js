'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _cryptocompare = require('cryptocompare');

var _cryptocompare2 = _interopRequireDefault(_cryptocompare);

var _nodeFetch = require('node-fetch');

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

global.fetch = _nodeFetch2.default;

async function getCurrentPrice(coin, currency) {
    var result = await _cryptocompare2.default.priceMulti([coin], [currency]);
    return result[coin][currency].toFixed(4);
}

async function getMovingAverage(coin, currency, options) {
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

async function getMovingAverageDelta(coin, currency, lowDays, highDays) {
    var results = [await getMovingAverage(coin, currency, { days: lowDays }), await getMovingAverage(coin, currency, { days: highDays })];

    return (results[0] - results[1]).toFixed(4);
}

exports.default = {
    getCurrentPrice: getCurrentPrice,
    getMovingAverage: getMovingAverage,
    getMovingAverageDelta: getMovingAverageDelta
};