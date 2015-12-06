export default class Jax {
  constructor(url = '') {
    this.sent = false
    this.req = new XMLHttpRequest()

    this.req.addEventListener('progress', event => {
      event.lengthComputable && this.update && this.update(event.loaded / event.total)
    })

    this.req.addEventListener('readystatechange', event => {
      if(this.req.readyState === 4) {
        this.req.status === 200
          ? this.cb(this.req.responseText)
          : this.error(this.req.status)
      }
    })

    this.req.open('GET', url)
  }

  progress(func) {
    this.update = func
    return this
  }

  then(func) {
    this.cb = func
    this._send()
    return this
  }

  error(func) {
    this.error = func
    this._send()
    return this
  }

  _send() {
    if(!this.sent) {
      this.req.send()
      this.sent = true
    }
  }
}
