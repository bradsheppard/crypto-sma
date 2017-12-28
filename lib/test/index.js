import cryptoSMA from '../index';
import assert from 'assert';

describe('Tests', () => {
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
});