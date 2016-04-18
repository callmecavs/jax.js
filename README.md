# Jax.js

[![Jax.js on NPM](https://img.shields.io/npm/v/jax.js.svg)](https://www.npmjs.com/package/jax.js)

A tiny Promise wrapper for GET requests.

## Usage

Jax was developed with a modern JavaScript workflow in mind. To use it, it's recommended you have a build system in place that can transpile ES6, and bundle modules. For a minimal boilerplate that does so, check out [outset](https://github.com/callmecavs/outset).

Follow these steps to get started:

* [Install](#install)
* [Import](#import)
* [Call](#call)

### Install

Using NPM, install Jax.js, and add it to your package.json dependencies.

```
$ npm install jax.js --save
```

### Import

Import Jax from `node_modules`, naming it whatever you prefer.

```es6
// import Jax
import jax from 'jax.js'
```

### Call

Jax uses [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) under the hood. Making a GET request looks as follows:

```es6
jax('url')
  .then(response => {
    // the request is done, and the status === 200
    // ...
  })
  .catch(status => {
    // the request is done, but the status !== 200
    // ...
  })
```

Don't forget that, because `then` returns a Promise, you can chain it.

## Browser Support

Targeting evergreen browsers. Note that **IE does not natively support Promises, but Edge does.**

## License

MIT. © 2016 Michael Cavalea

[![Built With Love](http://forthebadge.com/images/badges/built-with-love.svg)](http://forthebadge.com)
