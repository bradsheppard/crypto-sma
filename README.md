crypto-sma
=============

[![npm][npm-image]][npm-url]
[![travis][travis-image]][travis-url]
[![standard][standard-image]][standard-url]


Install
-------

    npm install --save crypto-sma


Usage
-----
crypto-sma is a node module for calculating the SMA (Simple Moving Average) of a crypto currency over
a specified number of days. It also includes a function to return the delta of SMAs over differs ent intervals.
This node module depends on the cryptocompare node module and wraps much of that functionality in async functions,
so callbacks and promises are not required.


### Methods

### `currentPrice()`

Get the current list of all cryptocurrencies and the following information about each coin.

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

Gets the specified SMA (Simple Moving Average) of a crypto currency.

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

### `movingAverageDelta()`

Calculates the delta between two moving averages. For example, if we consider a bitcoin 15-day moving average
of 20,000 and a 5 day moving average of 21,500. Then the delta returned would be 1,500.

`movingAverageDelta(coin, currency, options)`

- `coin` (String) Represents the symbol of the coin.
- `currency` (String) Represents the currency to use for returning the moving average.
- `options` (Object)
    - `interval1` (Number) The first interval in days.
    - `interval2` (Number) The second interval in days
    - `offset` (Number) The offset, as explained above.

## License

[MIT](LICENSE.md)
