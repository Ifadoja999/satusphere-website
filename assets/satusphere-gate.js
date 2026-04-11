/**
 * satusphere-gate.js
 * Shared email capture utility for SatUsPhere tools.
 *
 * Provides:
 *   SatuGate.hasSubscribed()          - returns true if this browser already captured email
 *   SatuGate.markSubscribed()         - set the localStorage flag
 *   SatuGate.submit(email, payload, onComplete) - POST to n8n -> Kit
 *   SatuGate.showModal(opts)          - generic overlay modal for tools without their own gate UI
 *
 * Configuration (set before this script or update inline below):
 *   SatuGate.WEBHOOK_URL              - n8n webhook that forwards to Kit
 *
 * Kit form ID and API key live in n8n (server-side), not here.
 * Update WEBHOOK_URL once the Kit forwarding workflow is live in n8n.
 */

(function (window) {
  'use strict';

  var STORAGE_KEY = 'sp_subscribed';

  // n8n webhook - receives email + metadata, subscribes to Kit form, applies tags
  // Update this URL if the n8n workflow endpoint changes
  var WEBHOOK_URL = 'https://ireaje.app.n8n.cloud/webhook/satusphere-kit-subscribe';

  var SatuGate = {

    WEBHOOK_URL: WEBHOOK_URL,

    // ---------------------------------------------------------------------------
    // localStorage helpers
    // ---------------------------------------------------------------------------

    hasSubscribed: function () {
      try {
        return localStorage.getItem(STORAGE_KEY) === '1';
      } catch (e) {
        return false;
      }
    },

    markSubscribed: function () {
      try {
        localStorage.setItem(STORAGE_KEY, '1');
      } catch (e) {}
    },

    // ---------------------------------------------------------------------------
    // Submit email to n8n -> Kit
    //
    // @param {string}   email       - user email address
    // @param {object}   payload     - extra metadata (source, score, etc.)
    // @param {function} onComplete  - called after submit (success OR failure - always proceed)
    // ---------------------------------------------------------------------------

    submit: function (email, payload, onComplete) {
      if (!email || email.indexOf('@') === -1) {
        if (onComplete) onComplete(false);
        return;
      }

      var body = Object.assign({ email: email }, payload || {});

      var done = function (ok) {
        SatuGate.markSubscribed();
        if (onComplete) onComplete(ok);
      };

      try {
        var xhr = new XMLHttpRequest();
        xhr.open('POST', SatuGate.WEBHOOK_URL, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.timeout = 8000;
        xhr.onload    = function () { done(xhr.status >= 200 && xhr.status < 300); };
        xhr.onerror   = function () { done(false); };
        xhr.ontimeout = function () { done(false); };
        xhr.send(JSON.stringify(body));
      } catch (e) {
        done(false);
      }
    },

    // ---------------------------------------------------------------------------
    // Generic modal overlay
    // For tools that do not have their own gate UI built in.
    //
    // opts = {
    //   heading:    string   - modal title
    //   subtext:    string   - supporting copy
    //   ctaLabel:   string   - submit button label (default: "Show My Results")
    //   skipLabel:  string   - skip link label (default: "Skip")
    //   source:     string   - passed to n8n as `source` field
    //   metadata:   object   - any extra fields to include in the payload
    //   onSubmit:   fn(email) called after successful submit
    //   onSkip:     fn()     called when user skips
    // }
    // ---------------------------------------------------------------------------

    showModal: function (opts) {
      opts = opts || {};

      // If already subscribed, call onSkip path immediately (go straight to results)
      if (SatuGate.hasSubscribed()) {
        if (opts.onSkip) opts.onSkip();
        return;
      }

      var overlay = document.createElement('div');
      overlay.id = 'sp-gate-overlay';
      overlay.style.cssText = [
        'position:fixed', 'inset:0', 'z-index:9999',
        'background:rgba(13,27,46,0.92)',
        'display:flex', 'align-items:center', 'justify-content:center',
        'padding:24px', 'backdrop-filter:blur(4px)'
      ].join(';');

      var card = document.createElement('div');
      card.style.cssText = [
        'background:#122438', 'border-radius:16px',
        'padding:40px 36px', 'max-width:440px', 'width:100%',
        'box-shadow:0 24px 64px rgba(0,0,0,0.5)',
        'border:1px solid rgba(255,255,255,0.08)',
        'font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif',
        'color:#fff', 'text-align:center'
      ].join(';');

      card.innerHTML = [
        '<div style="font-size:2rem;margin-bottom:16px">&#9711;</div>',
        '<h2 style="font-size:1.375rem;font-weight:800;margin-bottom:12px;color:#fff">',
          opts.heading || 'Your results are ready',
        '</h2>',
        '<p style="color:#94a3b8;font-size:0.9375rem;line-height:1.6;margin-bottom:28px">',
          opts.subtext || 'Enter your email to unlock your full results and get the Bitcoin Beginner Checklist.',
        '</p>',
        '<input id="sp-gate-email" type="email" placeholder="Enter your email address"',
          ' autocomplete="email"',
          ' style="width:100%;padding:14px 16px;border-radius:8px;border:1.5px solid rgba(255,255,255,0.15);',
          'background:rgba(255,255,255,0.06);color:#fff;font-size:1rem;margin-bottom:12px;outline:none;',
          'box-sizing:border-box" />',
        '<button id="sp-gate-submit" type="button"',
          ' style="width:100%;padding:14px;border-radius:8px;background:#F7931A;color:#fff;',
          'font-weight:700;font-size:1rem;border:none;cursor:pointer;margin-bottom:16px;',
          'transition:opacity 0.2s">',
          opts.ctaLabel || 'Show My Results',
        '</button>',
        '<p style="color:#64748b;font-size:0.8125rem;margin-bottom:12px">',
          'No spam. Unsubscribe any time.',
        '</p>',
        '<button id="sp-gate-skip" type="button"',
          ' style="background:none;border:none;color:#64748b;font-size:0.8125rem;',
          'cursor:pointer;text-decoration:underline;padding:0">',
          opts.skipLabel || 'Skip - show results without email',
        '</button>'
      ].join('');

      overlay.appendChild(card);
      document.body.appendChild(overlay);

      var emailInput = document.getElementById('sp-gate-email');
      var submitBtn  = document.getElementById('sp-gate-submit');
      var skipBtn    = document.getElementById('sp-gate-skip');

      function closeModal() {
        if (overlay.parentNode) overlay.parentNode.removeChild(overlay);
      }

      submitBtn.addEventListener('click', function () {
        var email = emailInput.value.trim();
        if (!email || email.indexOf('@') === -1) {
          emailInput.focus();
          emailInput.style.borderColor = '#F7931A';
          return;
        }
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;

        var payload = Object.assign({ source: opts.source || 'satusphere-tool' }, opts.metadata || {});
        SatuGate.submit(email, payload, function () {
          closeModal();
          if (opts.onSubmit) opts.onSubmit(email);
        });
      });

      skipBtn.addEventListener('click', function () {
        closeModal();
        if (opts.onSkip) opts.onSkip();
      });

      // Submit on Enter key
      emailInput.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') submitBtn.click();
      });

      // Focus email input after short delay
      setTimeout(function () { emailInput.focus(); }, 100);
    }

  };

  window.SatuGate = SatuGate;

})(window);
