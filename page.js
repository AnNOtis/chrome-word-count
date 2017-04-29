document.onselectstart = clearMessage
chrome.runtime.onMessage.addListener(request => {
  console.log(request)
  if (request.type === 'show') {
    showMessage(request.content)
  }
})

const className = 'cewc-msg'
function showMessage(message) {
  let box = document.querySelector('.' + className)

  if (!box) {
    box = document.createElement('div')
    box.classList.add(className)
    document.body.appendChild(box)
  }

  box.textContent = message
}

function clearMessage() {
  const el = document.querySelector('.' + className)
  if (el) {
    el.parentNode.removeChild(el)
  }
}
