import cryptocompare from 'cryptocompare';
import nodeFetch from 'node-fetch';
import statsLite from 'stats-lite';

global.fetch = nodeFetch;

async function currentPrice(coin, currency) {
    const result = await cryptocompare.priceMulti([coin], [currency]);
    return result[coin][currency].toFixed(4);
}

async function movingAverage(coin, currency, options) {
    const { days, offset } = options;
    const cryptoOptions = { limit: days - 1 };
    if(offset) {
        const dateOffset = new Date();
        dateOffset.setDate(dateOffset - offset);
        cryptoOptions.timestamp = dateOffset;
    }
    const result = await cryptocompare.histoDay(coin, currency, cryptoOptions);
    let sum = 0;
    result.forEach(value => {
        sum += value.close;
    });
    return (sum / result.length).toFixed(4);
}

async function movingAverageDelta(coin, currency, options) {
    const { interval1, interval2, offset } = options;
    const results = [
        await movingAverage(coin, currency, { days: interval1, offset }),
        await movingAverage(coin, currency, { days: interval2, offset })
    ];

    return (results[0] - results[1]).toFixed(4);
}

async function upperBollingerBand(coin, currency, options) {
    const { days, offset } = options;
    const movingAverage = await movingAverage(coin, currency, { days, offset });
    const priceHistory = await cryptocompare.histoDay(coin, currency)
    const standardDeviation = statsLite.stdev()
}

module.exports = {
    currentPrice,
    movingAverage,
    movingAverageDelta
};