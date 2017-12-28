'use strict';

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getPrice = async function getPrice() {
    var result = await _index2.default.getCurrentPrice('BTC', 'CAD');
    console.log('Price: ' + result);
};

var getMovingAverage = async function getMovingAverage() {
    var result = await _index2.default.getMovingAverage('BTC', 'CAD', { days: 4 });
    console.log('Moving average: ' + result);
};

var getMovingAverageDelta = async function getMovingAverageDelta() {
    var result = await _index2.default.getMovingAverageDelta('BTC', 'CAD', 5, 15);
    console.log('Moving average delta: ' + result);
};

getPrice();
getMovingAverage();
getMovingAverageDelta();