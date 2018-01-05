import assert from 'assert';
import stockStats from '../stock_stats';

describe('Stock Stats Tests', () => {
    describe('calculateMovingAverage', () => {
        it('Returns correct moving average', () => {
            const points = [1, 2, 5, 6, 2.5];
            const actualMovingAverage = stockStats.calculateMovingAverage(points);
            const expectedMovingAverage = 3.3;
            assert.equal(expectedMovingAverage, actualMovingAverage);
        });
    });

    describe('upperBollingerBand', () => {
        it('Returns correct upper Bollinger band', () => {
            const movingAverage = 20.5;
            const standardDeviation = 1.25;
            const k = 2;
            const actualUpperBollingerBand = stockStats.upperBollingerBand(movingAverage, standardDeviation, k);
            const expectedUpperBollingerBand = 23;
            assert.equal(expectedUpperBollingerBand, actualUpperBollingerBand);
        });
    });

    describe('lowerBollingerBand', () => {
        it('Returns correct lower Bollinger band', () => {
            const movingAverage = 20.5;
            const standardDeviation = 1.25;
            const k = 2;
            const actualLowerBollingerBand = stockStats.lowerBollingerBand(movingAverage, standardDeviation, k);
            const expectedLowerBollingerBand = 18;
            assert.equal(expectedLowerBollingerBand, actualLowerBollingerBand);
        });
    });
});