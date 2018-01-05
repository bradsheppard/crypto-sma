var cryptoSMA = require('../index');
import assert from 'assert';

describe('Index Tests', () => {
    describe('getCurrentPrice', () => {
        it('It should return a price', async () => {
            const result = await cryptoSMA.currentPrice('BTC', 'CAD');
            assert.equal(true, result > 0);
        })
    });

    describe('getMovingAverage', () => {
        it('It should return a number', async () => {
            const result = await cryptoSMA.movingAverage('BTC', 'CAD', { limit: 5 });
            assert.equal(true, result > 0);
        });
    });

    describe('lowerBollingerBand', () =>  {
        it('It should return a number', async () => {
            const result = await cryptoSMA.lowerBollingerBand('BTC', 'CAD', { days: 5, offset: 2, k: 2 });
            assert.equal(true, result > 0);
        });
    });

    describe('upperBollingerBand', () =>  {
        it('It should return a number', async () => {
            const result = await cryptoSMA.upperBollingerBand('BTC', 'CAD', { days: 5, offset: 2, k: 2 });
            assert.equal(true, result > 0);
        });
    });
});