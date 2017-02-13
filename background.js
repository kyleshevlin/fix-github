(function() {
  'use strict'

  function removeDarkHeader(tab) {
    chrome.tabs.executeScript(tab.id, {
      code: '(' + function() {
        var pattern = /github\.com/
        var href = window.location.href

        if (pattern.test(href)) {
          document.querySelector('.header').classList.remove('header-dark')
        }
      } + ')()'
    })
  }

  chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    removeDarkHeader(tab)
  })
}())
