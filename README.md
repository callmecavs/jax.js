# Jax.js

Simple AJAX wrapper for GET requests.

## Usage

Jax mimics Promise syntax, but uses callbacks under the hood.

```es6
// JSON request
new Jax('test.json')
  .then(res => {
    const json = JSON.parse(res)
  })

// HTML request
new Jax('test.html')
  .then(res => {
    const element = document.createElement('div').innerHTML(res)
    document.body.appendChild(element)
  })
```

### Progress

Includes a hook to monitor progress via the [ProgressEvent](https://developer.mozilla.org/en-US/docs/Web/API/ProgressEvent) interface.

```es6
new Jax('progress.json')
  .progress(percent => {
    // percent downloaded is in decimal form
    console.log(percent)
  })
  .then(res => {
    // handle response...
  })
```

## Browser Support

Targeting evergreen browsers and **IE10+**.

## License

MIT. © 2015 Michael Cavalea

[![Built With Love](http://forthebadge.com/images/badges/built-with-love.svg)](http://forthebadge.com)
