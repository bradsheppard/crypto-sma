crypto-sma
=============

[![npm][npm-image]][npm-url]
[![travis][travis-image]][travis-url]

[npm-image]: https://badge.fury.io/js/crypto-sma.svg
[npm-url]: https://www.npmjs.com/package/crypto-sma
[travis-image]: https://travis-ci.org/bradsheppard/crypto-sma.svg?branch=master
[travis-url]: https://travis-ci.org/bradsheppard/crypto-sma

Install
-------

    npm install --save crypto-sma


Usage
-----
crypto-sma is a node module for calculating the SMA (Simple Moving Average) and Bollinger Bands of a crypto currency over
a specified number of days. This node module module uses async function, and as such, requires a version of Node.js supporting this.


### Methods

### `currentPrice()`

Gets the price of the crypto currency in the specified currency.

`currentPrice(coin, currency)`

- `coin` (String) Represents the symbol of the coin.
- `currency` (String) Represents the currency to use for returning the price.
- `Returns` (Number) The price.

```js
var cryptoSMA = require('crypto-sma');

// Usage:
getBitcoinPrice = async () => {
    var price = await cryptoSMA.currentPrice('BTC', 'CAD');
    console.log(price);
};

getBitcoinPrice();
```

### `movingAverage()`

Calculates the specified SMA (Simple Moving Average) of a crypto currency.

`movingAverage(coin, currency, options)`

- `coin` (String) Represents the symbol of the coin.
- `currency` (String) Represents the currency to use for returning the moving average.
- `options` (Object)
    - `days` (Number) The number of days to use when calculating the moving average.
    - `offset` (Number) By default the offset used will be zero, meaning the days used to calculate
    the moving average will be up to the current day. If offset is used, the days will instead be up to the current 
    day minus the offset.
- `Returns` (Number) The moving average.

```js
var cryptoSMA = require('crypto-sma');

// Usage:
getMovingAverage = async () => {
    var price = await cryptoSMA.movingAverage('BTC', 'CAD', { days: 5, offset: 2 });
    console.log(price);
};

getMovingAverage();
```

### `upperBollingerBand()`

Calculates the upper Bollinger Band of the crypto currency based on the given number of days, offset and k value.
(movingAverage + k * standardDeviation).

`upperBollingerBand(coin, currency, options)`
- `coin` (String) Represents the symbol of the coin.
- `currency` (String) Represents the currency to use for returning the moving average.
- `options` (Object)
    - `days` (Number) The number of days to use when calculating the moving average.
    - `offset` (Number) By default the offset used will be zero, meaning the days used to calculate
    the moving average will be up to the current day. If offset is used, the days will instead be up to the current 
    day minus the offset.
    - `k` (Number) The k value used for the Bollinger band calculation.
- `Returns` (Number) The upper Bollinger Band.

```js
var cryptoSMA = require('crypto-sma');

// Usage:
var getUpperBollingerBand = async () => {
    var result = await cryptoSMA.upperBollingerBand('BTC', 'CAD', { days: 4, offset: 2, k: 2});
    console.log(result);
};

getUpperBollingerBand();
```

### `lowerBollingerBand()`

Calculates the lower Bollinger Band of the crypto currency based on the given number of days, offset and k value.
(movingAverage - k * standardDeviation).

`lowerBollingerBand(coin, currency, options)`
- `coin` (String) Represents the symbol of the coin.
- `currency` (String) Represents the currency to use for returning the moving average.
- `options` (Object)
    - `days` (Number) The number of days to use when calculating the moving average.
    - `offset` (Number) By default the offset used will be zero, meaning the days used to calculate
    the moving average will be up to the current day. If offset is used, the days will instead be up to the current 
    day minus the offset.
    - `k` (Number) The k value used for the Bollinger band calculation.
- `Returns` (Number) The lower Bollinger Band.

```js
var cryptoSMA = require('crypto-sma');

// Usage:
var getLowerBollingerBand = async () => {
    var result = await cryptoSMA.lowerBollingerBand('BTC', 'CAD', { days: 4, offset: 2, k: 2});
    console.log(result);
};

getLowerBollingerBand();
```


## License

[MIT](LICENSE.md)
