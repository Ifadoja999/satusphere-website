/**
 * satusphere-gate.js - shared gate logic for all Bitcoin tools
 *
 * Gate philosophy: users can interact with all tools freely.
 * Email is required only to VIEW personalized results.
 * Once captured, localStorage prevents repeat prompts across all tools.
 *
 * localStorage flag: satusphere_lead_captured
 * Value: string 'true' (not boolean)
 *
 * ---- HOW TO USE IN A TOOL ----
 *
 * import { showGate, isUnlocked } from '/js/satusphere-gate.js';
 *
 * // When user clicks Calculate / See Results / Decode:
 * function handleSubmit() {
 *   const result = computeResult(); // always compute first
 *   showGate(() => displayResult(result)); // gate the display
 * }
 */

const GATE_FLAG = 'satusphere_lead_captured';

/**
 * Returns true if the user has already provided their email.
 * @returns {boolean}
 */
export function isUnlocked() {
  return localStorage.getItem(GATE_FLAG) === 'true';
}

/**
 * Set the localStorage flag to permanently unlock all tools for this browser.
 * Call this after a successful email capture.
 */
export function unlock() {
  localStorage.setItem(GATE_FLAG, 'true');
}

/**
 * Show results immediately if the user is already unlocked.
 * Otherwise, render the email capture gate and fire onUnlock once captured.
 *
 * @param {Function} onUnlock - callback to run when the user unlocks (or is already unlocked)
 */
export function showGate(onUnlock) {
  if (isUnlocked()) {
    onUnlock();
    return;
  }
  renderGateUI(onUnlock);
}

/**
 * Render the email capture gate overlay.
 * STUB - Phase 3 will implement the full UI.
 *
 * @param {Function} onUnlock - callback to run after successful email capture
 */
function renderGateUI(onUnlock) {
  // Phase 3 will replace this stub with the full email capture overlay.
  // For now, this is intentionally a no-op so Phase 2 can ship independently.
  console.warn('[satusphere-gate] renderGateUI stub called - Phase 3 not yet deployed.');
}
