# Jax.js

[![Jax.js on NPM](https://img.shields.io/npm/v/jax.js.svg)](https://www.npmjs.com/package/jax.js)

A tiny AJAX wrapper for GET requests.

## Usage

Jax was developed with a modern JavaScript workflow in mind. To use it, it's recommended you have a build system in place that can transpile ES6, and bundle modules. For a minimal boilerplate that does so, check out [outset](https://github.com/callmecavs/outset).

Follow these steps to get started:

* [Install](#install)
* [Call](#call)

### Install

Using NPM, install Jax.js, and add it to your package.json dependencies.

```
$ npm install jax.js --save
```

### Call

Jax mimics promise syntax, but uses callbacks.

```es6
// import Jax
import jax from 'jax.js'

// make a request
jax('url')
  .then((response, status) => {
    // at this point, the request is done
    // if response === null, status !== 200
  })
```

## Browser Support

Targeting evergreen browsers and **IE10+**.

## License

MIT. © 2016 Michael Cavalea

[![Built With Love](http://forthebadge.com/images/badges/built-with-love.svg)](http://forthebadge.com)
