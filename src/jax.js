export default () => {
  const promises = {
    success: null,
    error: null
  }

  const request = new XMLHttpRequest()
  request.addEventListener('readystatechange', ready)

  return {
    get: get
  }

  function get(url) {
    request.open('GET', url)
    request.send()

    return setters()
  }

  function ready() {
    if(request.readyState === request.DONE) {
      if(request.status === 200) {
        return promises.success(request.responseText)
      }

      return promises.error(request.status)
    }
  }

  function setters() {
    return Object.keys(promises).reduce((prev, curr) => {
      prev[curr] = (func) => promises[curr] = func
      return prev
    }, {})
  }
}
