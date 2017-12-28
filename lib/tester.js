import cryptoMonitor from './index';

const getPrice = async () => {
    const result = await cryptoMonitor.getCurrentPrice('BTC', 'CAD');
    console.log(`Price: ${result}`);
};

const getMovingAverage = async () => {
    const result = await cryptoMonitor.getMovingAverage('BTC', 'CAD', { days: 4 });
    console.log(`Moving average: ${result}`);
};

const getMovingAverageDelta = async () => {
    const result = await cryptoMonitor.getMovingAverageDelta('BTC', 'CAD', 5, 15);
    console.log(`Moving average delta: ${result}`);
};

getPrice();
getMovingAverage();
getMovingAverageDelta();
