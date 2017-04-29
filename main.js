chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({title: 'Count Words', contexts: ['selection'], id: 'wordcounts'})
})

chrome.contextMenus.onClicked.addListener(onClickHandler)

function onClickHandler(info, tab) {
  if (info.selectionText) {
    showResult(tab, countWords(info.selectionText))
  }
}

function countWords(text) {
  return text.split(/\s/).length
}

function showResult(tab, number) {
  let message
  if (number > 1) {
    message = `${number} words`
  } else if (number === 1) {
    message = `${number} word`
  } else {
    message = `0 word`
  }

  showMessage(tab, message)
}

function showMessage(tab, message) {
  chrome.tabs.sendMessage(tab.id, {type: 'show', content: message})
}
