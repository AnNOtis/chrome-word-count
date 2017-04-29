function countWords(text) {
  return text.split(/\s/).length
}

function onClickHandler(info) {
  if (info.selectionText) {
    alert(`${countWords(info.selectionText)} 字`)
  }
}

chrome.contextMenus.onClicked.addListener(onClickHandler)

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({title: 'Count Words', contexts: ['selection'], id: 'wordcounts'})
})
