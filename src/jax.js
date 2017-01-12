let jax

if('fetch' in window) {
  jax = window.fetch
} else {
  const change = (request, resolve, reject) => {
    if (request.readyState === request.DONE) {
      request.status === 200
        ? resolve(request.responseText)
        : reject(request.status)
    }
  }

  jax = url => new Promise((resolve, reject) => {
    const request = new window.XMLHttpRequest()
    request.addEventListener('readystatechange', () => change(request, resolve, reject))
    request.open('GET', url)
    request.send()
  })
}

export default jax
