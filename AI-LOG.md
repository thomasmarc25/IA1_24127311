# AI Activity Log

### Entry 1
- **Date:** 2026-10-09
- **Tool Used:** Antigravity (Gemini 3.7 Flash)
- **Task:** Set up development harness (rules files, quality gate, CI workflow) and configure AI interaction & logging rules.
- **What AI produced:** 
  - Created quality gate script `scripts/gate.js` and added `"gate": "node scripts/gate.js"` to `package.json`.
  - Created `.github/workflows/ci.yml` for automated CI test matrix on push/pull request.
  - Created `.cursorrules` and updated `AGENTS.md` with zero-dependency constraints, pre-coding consultation rules, AI activity logging format, and dynamic rule proposal workflow.
- **What I changed/rejected:** 
  <!-- [LEAVE THIS BLANK FOR ME TO FILL] -->
  <!-- Suggested note: Reviewed rule file updates, gate script, and CI configuration. -->
- **What I wrote by hand:** 
  <!-- [LEAVE THIS BLANK FOR ME TO FILL] -->
  <!-- Suggested note: Initial prompt specifying harness and interactive logging rules. -->

---

### Entry 2
- **Date:** 2026-10-09
- **Tool Used:** Antigravity (Gemini 3.7 Flash)
- **Task:** Implement `cartTotal` in `src/cart.js` adhering to slide specifications and lecture examples, and expand unit tests.
- **What AI produced:** 
  - Implemented `cartTotal(items, options)` in `src/cart.js` using `reduce`, input validation (`RangeError` on negative price or invalid quantity), VAT calculation, shipping fee threshold evaluation, and `Math.round()`.
  - Added full test suite in `test/cart.test.js` covering the slide worked example (467400), empty cart, free shipping threshold, normal shipping, whole đồng rounding (number type), negative price rejection, and invalid/fractional quantity rejection.
  - Verified quality gate (`npm run gate`) with 100% passing tests (GREEN).
- **What I changed/rejected:** 
  <!-- [LEAVE THIS BLANK FOR ME TO FILL] -->
  <!-- Suggested note: Verified that the implementation uses Math.round() rather than toFixed(0), and uses built-in node:test without dependencies. -->
- **What I wrote by hand:** 
  <!-- [LEAVE THIS BLANK FOR ME TO FILL] -->
  <!-- Suggested note: Provided specification table from IA#1 instructions and reference slides. -->

---

### Entry 3
- **Date:** 2026-10-10
- **Tool Used:** Antigravity (Gemini 3.6 Flash)
- **Task:** Optimize `cartTotal` in `src/cart.js` using single-pass indexed loop to eliminate callback and iteration overhead.
- **What AI produced:** 
  - Refactored `cartTotal` in `src/cart.js` from a two-pass approach (`for...of` validation loop + `reduce` accumulation) into a single-pass indexed `for` loop ($O(N)$).
  - Validates `price` and `qty` and accumulates `subtotal` concurrently in one pass, avoiding function call frames and garbage collection pressure.
  - Verified quality gate (`npm run gate`) with 7/7 tests passing cleanly.
- **What I changed/rejected:** 
  <!-- [LEAVE THIS BLANK FOR ME TO FILL] -->
  <!-- Suggested note: Selected Option 2 (indexed loop) over Option 1 (reduce) to eliminate callback invocation overhead. -->
- **What I wrote by hand:** 
  <!-- [LEAVE THIS BLANK FOR ME TO FILL] -->
  <!-- Suggested note: Selected Option 2 after inquiring about callback overhead scenarios. -->

---
