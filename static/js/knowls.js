/**
 * Knowl System - Inline expandable definitions
 * Fetches HTML fragments and displays them inline below the trigger element.
 */
(function() {
  'use strict';

  const cache = new Map();
  const MAX_DEPTH = 2;

  function getKnowlDepth(element) {
    let depth = 0;
    let parent = element.closest('.knowl-content');
    while (parent) {
      depth++;
      parent = parent.parentElement?.closest('.knowl-content');
    }
    return depth;
  }

  function findInsertionPoint(element) {
    // Find the nearest block-level parent to insert after
    let current = element;
    while (current && current.parentElement) {
      const parent = current.parentElement;
      const display = window.getComputedStyle(parent).display;
      if (display === 'block' || display === 'flex' || parent.tagName === 'P' || parent.tagName === 'LI') {
        return current;
      }
      current = parent;
    }
    return element;
  }

  function closeKnowl(panel) {
    const trigger = document.querySelector(`[aria-controls="${panel.id}"]`);
    if (trigger) {
      trigger.setAttribute('aria-expanded', 'false');
    }
    panel.remove();
  }

  async function toggleKnowl(event) {
    const trigger = event.target.closest('.knowl');
    if (!trigger) return;

    event.preventDefault();

    const url = trigger.dataset.knowl;
    const existingPanel = trigger.nextElementSibling?.classList.contains('knowl-panel')
      ? trigger.nextElementSibling
      : document.getElementById(trigger.getAttribute('aria-controls'));

    // If already open, close it
    if (existingPanel) {
      closeKnowl(existingPanel);
      return;
    }

    // Check depth limit
    const depth = getKnowlDepth(trigger);
    if (depth >= MAX_DEPTH) {
      // Fall back to navigation
      window.location.href = trigger.href;
      return;
    }

    // Create panel
    const panelId = 'knowl-' + Math.random().toString(36).substr(2, 9);
    const panel = document.createElement('div');
    panel.className = 'knowl-panel';
    panel.id = panelId;
    panel.setAttribute('role', 'region');
    panel.setAttribute('aria-label', 'Definition');
    panel.innerHTML = '<div class="knowl-loading">Loading...</div>';

    trigger.setAttribute('aria-expanded', 'true');
    trigger.setAttribute('aria-controls', panelId);

    // Insert after the paragraph/block containing the trigger
    const insertAfter = findInsertionPoint(trigger);
    insertAfter.parentNode.insertBefore(panel, insertAfter.nextSibling);

    // Fetch content
    try {
      let html;
      if (cache.has(url)) {
        html = cache.get(url);
      } else {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Failed to load');
        html = await response.text();

        // Extract just the knowl-content div from the response
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const content = doc.querySelector('.knowl-content');
        html = content ? content.outerHTML : html;

        cache.set(url, html);
      }

      panel.innerHTML = html;

      // Add close button handler
      const closeBtn = panel.querySelector('.knowl-close');
      if (closeBtn) {
        closeBtn.addEventListener('click', () => closeKnowl(panel));
      }

      // Animate in
      requestAnimationFrame(() => {
        panel.classList.add('knowl-panel-open');
      });

    } catch (error) {
      panel.innerHTML = `<div class="knowl-error">Failed to load definition. <a href="${trigger.href}">View full page</a></div>`;
    }
  }

  // Event delegation
  document.addEventListener('click', toggleKnowl);

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const openPanels = document.querySelectorAll('.knowl-panel');
      openPanels.forEach(panel => closeKnowl(panel));
    }
  });
})();
