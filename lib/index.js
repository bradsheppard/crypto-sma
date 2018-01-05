import cryptocompare from 'cryptocompare';
import nodeFetch from 'node-fetch';
import statsLite from 'stats-lite';
import stockStats from './stock_stats';

global.fetch = nodeFetch;

function roundResult(number) {
    return parseFloat(number.toFixed(4));
}

async function currentPrice(coin, currency) {
    const result = await cryptocompare.priceMulti([coin], [currency]);
    return roundResult(result[coin][currency]);
}

async function movingAverage(coin, currency, options) {
    const { days, offset } = options;
    const cryptoOptions = { limit: days - 1 };
    if(offset) {
        const dateOffset = new Date();
        dateOffset.setDate(dateOffset - offset);
        cryptoOptions.timestamp = dateOffset;
    }
    const priceHistory = await cryptocompare.histoDay(coin, currency, cryptoOptions);
    const closeHistory = priceHistory.map(value => { return parseFloat(value.close); });
    return roundResult(stockStats.calculateMovingAverage(closeHistory));
}

async function upperBollingerBand(coin, currency, options) {
    const { days, offset, k } = options;
    const priceHistory = await cryptocompare.histoDay(coin, currency, { days, offset });
    const closeHistory = priceHistory.map(value => { return parseFloat(value.close); });

    const params = getBollingerBandParameters(closeHistory);
    return roundResult(stockStats.upperBollingerBand(params.movingAverage, params.standardDeviation, k));
}

async function lowerBollingerBand(coin, currency, options) {
    const { days, offset, k } = options;
    const priceHistory = await cryptocompare.histoDay(coin, currency, { days, offset });
    const closeHistory = priceHistory.map(value => { return value.close; });

    const params = getBollingerBandParameters(closeHistory);
    return roundResult(stockStats.lowerBollingerBand(params.movingAverage, params.standardDeviation, k));
}

function getBollingerBandParameters(closeHistory) {
    const movingAverage = stockStats.calculateMovingAverage(closeHistory);
    const standardDeviation = statsLite.stdev(closeHistory);

    return { movingAverage, standardDeviation };
}

module.exports = {
    currentPrice,
    movingAverage,
    lowerBollingerBand,
    upperBollingerBand
};