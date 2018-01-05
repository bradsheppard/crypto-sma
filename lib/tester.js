const cryptoMonitor = require('./index');

const getPrice = async () => {
    const result = await cryptoMonitor.currentPrice('BTC', 'CAD');
    console.log(`Price: ${result}`);
};

const getMovingAverage = async () => {
    const result = await cryptoMonitor.movingAverage('BTC', 'CAD', { days: 4 });
    console.log(`Moving average: ${result}`);
};

const getUpperBollingerBand = async () => {
    const result = await cryptoMonitor.upperBollingerBand('BTC', 'CAD', { days: 4, offset: 2, k: 2});
    console.log(`Upper Bollinger band: ${result}`);
};

const getLowerBollingerBand = async () => {
    const result = await cryptoMonitor.lowerBollingerBand('BTC', 'CAD', { days: 4, offset: 2, k: 2});
    console.log(`Lower Bollinger band: ${result}`);
};



getPrice();
getMovingAverage();
getUpperBollingerBand();
getLowerBollingerBand();
