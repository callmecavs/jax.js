class Jax {
  constructor(url = '') {
    this.req = new XMLHttpRequest()

    this.req.addEventListener('progress', event => {
      event.lengthComputable && this.progress(event.loaded / event.total)
    })

    this.req.addEventListener('readystatechange', event => {
      this.req.readyState === 4 && this.req.status === 200
        ? this.cb(JSON.parse(this.req.responseText))
        : undefined
    })

    this.req.open('GET', url)
  }

  progress(func) {
    this.progress = func || undefined
    return this
  }

  then(func) {
    this.cb = func
    this.req.send()
  }
}
