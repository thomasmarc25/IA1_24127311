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
  Rejected adding any third-party npm packages or devDependencies (such as ESLint or Jest). Strictly enforced the zero-dependency constraint by requiring standard Node.js built-ins (`node:test`, `node --check`). In `.cursorrules` and `AGENTS.md`, I added an explicit "Never" rule to forbid installing external packages or returning string formatted values.
- **What I wrote by hand:** 
  Wrote the initial prompt defining the harness requirements: zero-dependency quality gate script, rules files, and CI matrix workflow. Set up the `"gate": "node scripts/gate.js"` script in `package.json` and specified the interactive logging structure.

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
  Checked the output of `cartTotal` to ensure it returned a pure `Number` using `Math.round()`, rejecting any `.toFixed(0)` calls that would return a string. Rejected testing only the happy path: ensured test cases explicitly cover edge cases (`qty: 0`, `qty: 1.5`, `price: -1`, and boundary threshold equality `subtotal === 500000`) so tests assert the specification rather than implementation details.
- **What I wrote by hand:** 
  Constructed the exact specification table and prompt taken from the Session 2 slides. Wrote test assertions testing boundary equality for free shipping and invalid fractional quantities.

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
  Evaluated two optimization options proposed by the assistant. Rejected Option 1 (`items.reduce`) after analyzing callback function overhead, execution context allocations, and V8 JIT inlining limits. Approved Option 2: replaced the two-pass iteration (`for...of` then `reduce`) with a single-pass indexed `for` loop to validate and accumulate simultaneously without callback allocations.
- **What I wrote by hand:** 
  Prompted asking for code optimization in `src/cart.js`, analyzed the performance trade-offs between callback closures and indexed loops, and selected Option 2.

---
