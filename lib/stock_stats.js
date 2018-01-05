function calculateMovingAverage(points) {
    let sum = 0;
    points.forEach(value => {
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
    calculateMovingAverage,
    upperBollingerBand,
    lowerBollingerBand
};