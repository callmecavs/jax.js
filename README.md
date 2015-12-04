# Jax.js

A simple AJAX wrapper for GET requests.

## Usage

Jax was developed with a modern JavaScript workflow in mind. To use it, it's recommended you have a build system in place that can transpile ES6, and bundle modules. For a minimal boilerplate that does so, check out [outset](https://github.com/callmecavs/outset).

Follow these steps to get started:

* [Install](#install)
* [Instantiate](#instantiate)

### Install

Using NPM, install Jax.js, and add it to your package.json dependencies.

```
$ npm install jax.js --save
```

### Instantiate

First, import Jax.

```es6
import Jax from 'jax.js'
```

Then, instantiate it.

```es6
// pass a URL to the constructor

new Jump('url')
```

The request won't be sent until a response handler is added.

```es6
// mimics Promise syntax, but uses callbacks under the hood

new Jax('url')
  .then(res => {
    // ...
  })
```

Optionally, add a progress handler. Progress is determined via the [ProgressEvent](https://developer.mozilla.org/en-US/docs/Web/API/ProgressEvent) interface.

```es6
new Jax('url')
  .progress(percent => {
    // percent downloaded is in decimal form
  })
  .then(res => {
    // ...
  })
```

## License

MIT. © 2015 Michael Cavalea

[![Built With Love](http://forthebadge.com/images/badges/built-with-love.svg)](http://forthebadge.com)
