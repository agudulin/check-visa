# check-visa [![Build Status][travis-image]][travis-url]

  > German National Visa status check for German Embassy in Moscow

## Install

```sh
npm install --save check-visa
```

## Usage

```js
var check = require('check-visa');

const personalBarcode = '1234567';
check(personalBarcode).then(console.log); // true
```

## License

MIT © [Alexander Gudulin](http://gudulin.com)

[travis-url]: https://travis-ci.org/agudulin/check-visa
[travis-image]: https://travis-ci.org/agudulin/check-visa.svg?branch=master
