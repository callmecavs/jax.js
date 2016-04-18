export default (url) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest()
    request.addEventListener('readystatechange', change.bind(undefined, request, resolve, reject))
    request.open('GET', url)
    request.send()
  })

  function change(request, resolve, reject) {
    if(request.readyState === request.DONE) {
      request.status === 200
        ? resolve(request.responseText)
        : reject(request.status)
    }
  }
}
