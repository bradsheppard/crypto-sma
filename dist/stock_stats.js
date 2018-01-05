"use strict";

function calculateMovingAverage(points) {
    var sum = 0;
    points.forEach(function (value) {
        sum += value;
    });
    return sum / points.length;
}

function upperBollingerBand(movingAverage, standardDeviation, k) {
    return movingAverage + k * standardDeviation;
}

function lowerBollingerBand(movingAverage, standardDeviation, k) {
    return movingAverage - k * standardDeviation;
}

module.exports = {
    calculateMovingAverage: calculateMovingAverage,
    upperBollingerBand: upperBollingerBand,
    lowerBollingerBand: lowerBollingerBand
};