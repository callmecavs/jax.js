class Jax {
  constructor(url = '') {
    this.req = new XMLHttpRequest()

    // this.req.addEventListener('progress', event => {
    //   event.lengthComputable && progress(event.loaded / event.total)
    // })

    this.req.addEventListener('readystatechange', event => {
      this.req.readyState === XMLHttpRequest.DONE && this.req.status === 200
        ? this.cb(JSON.parse(this.req.responseText))
        : undefined
    })

    this.req.open('GET', url)
  }

  then(func) {
    this.cb = func
    this.req.send()
  }
}

const res = new Jax('http://localhost:3000/test.json')
  .then(res => {
    console.log(res)
  })
