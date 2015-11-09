class Jax {
  constructor(url = '') {
    this.req = new XMLHttpRequest()

    this.req.addEventListener('progress', event => {
      event.lengthComputable && this.update && this.update(event.loaded / event.total)
    })

    this.req.addEventListener('readystatechange', event => {
      this.req.readyState === 4 && this.req.status === 200
        ? this.cb(JSON.parse(this.req.responseText))
        : undefined
    })

    this.req.open('GET', url)
  }

  progress(func) {
    this.update = func
    return this
  }

  then(func) {
    this.cb = func
    this.req.send()
  }
}

const res = new Jax('http://localhost:3000/test.json')
  .progress(percent => {
    console.log(percent)
  })
  .then(res => {
    console.log(res)
  })
