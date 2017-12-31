import cryptoMonitor from './index';

const getPrice = async () => {
    const result = await cryptoMonitor.currentPrice('BTC', 'CAD');
    console.log(`Price: ${result}`);
};

const getMovingAverage = async () => {
    const result = await cryptoMonitor.movingAverage('BTC', 'CAD', { days: 4 });
    console.log(`Moving average: ${result}`);
};

const getMovingAverageDelta = async () => {
    const result = await cryptoMonitor.movingAverageDelta('BTC', 'CAD', {interval1: 5, interval2: 15});
    console.log(`Moving average delta: ${result}`);
};

getPrice();
getMovingAverage();
getMovingAverageDelta();
