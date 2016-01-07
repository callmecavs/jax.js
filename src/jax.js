export default (url) => {
  let then

  const req = new XMLHttpRequest()
  req.addEventListener('readystatechange', ready)
  req.open('GET', url)
  req.send()

  return {
    then: (func) => then = func
  }

  function ready() {
    req.readyState === req.DONE && then(req.responseText, req.status)
  }
}
