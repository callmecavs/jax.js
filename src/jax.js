export default () => {
  // init promises
  const names = ['success', 'error']

  const funcs = names.reduce((prev, curr) => {
    prev[curr] = ''
    return prev
  }, {})

  const request = new XMLHttpRequest()
  request.addEventListener('readystatechange', ready)

  return {
    get: get
  }

  function get(url) {
    request.open('GET', url)
    request.send()

    return promises()
  }

  function ready() {
    if(request.readyState === request.DONE) {
      if(request.status === 200) {
        return funcs.success(request.responseText)
      }

      return funcs.error(request.status)
    }
  }

  function promises() {
    // return {
    //   success: (func) => {
    //     callbacks.success = func
    //   },
    //   progress: (func) => {
    //     callbacks.progress = func
    //   },
    //   error: (func) => {
    //     callbacks.error = func
    //   }
    // }

    return names.reduce((prev, curr) => {
      prev[curr] = (func) => funcs[curr] = func
      return prev
    }, {})
  }
}
