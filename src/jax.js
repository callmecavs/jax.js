export default () => {
  // const callbacks = ['success', 'progress', 'error'].reduce((prev, curr) => {
  //   prev[curr] = null
  //   return prev
  // }, {})

  const callbacks = {
    success: null,
    // progress: null,
    error: null
  }

  const request = new XMLHttpRequest()
  request.addEventListener('readystatechange', ready)
  // request.addEventListener('progress', callbacks.progress)

  function get(url) {
    request.open('GET', url)
    return callbacks
  }

  function ready() {
    if(request.readyState === request.DONE) {
      if(request.status === 200) {
        return callbacks.success(request.responseText)
      }
    }

    return callbacks.error(request.status)
  }
}
