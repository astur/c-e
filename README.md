# c-e

Making custom error classes

[![Build Status][travis-image]][travis-url]
[![NPM version][npm-image]][npm-url]

## Install

```bash
npm i c-e
```

## Usage

```js
const ce = require('c-e');

const CustomError = ce();
const NestedError = ce('NestedError', CustomError);

new CustomError().name === 'CustomError';   // true
new NestedError().name === 'NestedError';   // true
new NestedError('test').message === 'test'; // true
new NestedError() instanceof Error;         // true
new NestedError() instanceof CustomError;   // true
new NestedError() instanceof NestedError;   // true

const MyError = ce('MyError', Error, function(a, b){
    this.message = `${a + b}`;
    this.a = a;
    this.b = b;
});
new MyError(1, 2).message === '3'; // true
new MyError(1, 2).a === 1;         // true
new MyError(1, 2).b === 2;         // true
```

## License

MIT

[npm-url]: https://npmjs.org/package/c-e
[npm-image]: https://badge.fury.io/js/c-e.svg
[travis-url]: https://travis-ci.org/astur/c-e
[travis-image]: https://travis-ci.org/astur/c-e.svg?branch=master