// ==UserScript==
// @name        NBA.com Spoiler Hider
// @namespace   https://github.com/berkborazan/nbacomspoilerremover
// @description Hides the main content and footer using separate logic for easier debugging
// @match       https://www.nba.com/
// @grant       none
// @run-at      document-end
// ==/UserScript==

(function() {
  'use strict';


  function hideMainContent() {
    const mainContent = document.querySelectorAll('.Layout_mainContent__Gr_Jz');
    mainContent.forEach(el => {
      if (el && el.style.display !== 'none') {
        el.style.display = 'none';
      }
    });
  }


  function hideFooter() {
    const footerSelectors = '.Footer_footer__4vzqH, footer[class*="Footer_footer"]';
    const footers = document.querySelectorAll(footerSelectors);
    footers.forEach(el => {
      if (el && el.style.display !== 'none') {
        el.style.display = 'none';
      }
    });
  }

  function runAllHiders() {
    hideMainContent();
    hideFooter();
  }

  // Run initially
  runAllHiders();

  // Watch for dynamically loaded content and re-run both
  const observer = new MutationObserver(() => {
    runAllHiders();
  });

  observer.observe(document.body, { childList: true, subtree: true });
})();
