'use strict';

var cryptoMonitor = require('./index');

var getPrice = async function getPrice() {
    var result = await cryptoMonitor.currentPrice('BTC', 'CAD');
    console.log('Price: ' + result);
};

var getMovingAverage = async function getMovingAverage() {
    var result = await cryptoMonitor.movingAverage('BTC', 'CAD', { days: 4 });
    console.log('Moving average: ' + result);
};

var getUpperBollingerBand = async function getUpperBollingerBand() {
    var result = await cryptoMonitor.upperBollingerBand('BTC', 'CAD', { days: 4, offset: 2, k: 2 });
    console.log('Upper Bollinger band: ' + result);
};

var getLowerBollingerBand = async function getLowerBollingerBand() {
    var result = await cryptoMonitor.lowerBollingerBand('BTC', 'CAD', { days: 4, offset: 2, k: 2 });
    console.log('Lower Bollinger band: ' + result);
};

getPrice();
getMovingAverage();
getUpperBollingerBand();
getLowerBollingerBand();