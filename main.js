// ==UserScript==
// @name        NBA.com Main Content Hider (Homepage only)
// @namespace   https://github.com/berkborazan/nbacomspoilerremover
// @description Hides the main content area on NBA.com homepage only
// @match       https://www.nba.com/
// @grant       none
// @run-at      document-end
// ==/UserScript==

(function() {
  'use strict';

  function hideMainContent() {
    const elements = document.querySelectorAll('.Layout_mainContent__Gr_Jz');
    // hide or remove:
    elements.forEach(el => el.style.display = 'none'); // or el.remove();
  }

  // run initially
  hideMainContent();

  // watch for dynamically loaded content
  const observer = new MutationObserver(() => hideMainContent());
  observer.observe(document.body, { childList: true, subtree: true });
})();
