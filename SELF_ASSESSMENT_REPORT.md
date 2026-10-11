# SELF_ASSESSMENT_REPORT.md

- **Student ID:** 24127311
- **Repository URL:** https://github.com/thomasmarc25/IA1_24127311.git
- **CI Status:** Green (All GitHub Actions tests pass on push)
- **Claimed Total:** 100 / 100

---

## Rubric Breakdown & Evidence

| # | Criterion | Claimed Points | Max Points | Evidence / Explanation |
|---|---|---|---|---|
| 1 | **Behaviour** | 30 | 30 | Implemented in `src/cart.js`. Handles empty cart (returns 0), slide worked example returns `467400` as a number (`Math.round`), free shipping at threshold `subtotal >= freeShipFrom`, and throws `RangeError` on negative price or invalid quantity (`qty <= 0` or non-integer). |
| 2 | **Tests** | 20 | 20 | In `test/cart.test.js`. 7 atomic tests covering happy path (slide example), empty cart, free shipping equality & above threshold, sub-threshold shipping, numeric rounding, negative price `RangeError`, and invalid/fractional quantity `RangeError`. Each test has a single reason to fail. |
| 3 | **The harness** | 20 | 20 | `.cursorrules` and `AGENTS.md` define stack (Node >= 20 ESM), commands (`npm test`, `npm run gate`), and explicit "Never" rules (never add external dependencies, never commit `node_modules`). `scripts/gate.js` runs dependency verification, syntax checking (`node --check`), and `node --test`. CI in `.github/workflows/ci.yml` runs on every push. |
| 4 | **The brief** | 15 | 15 | `BRIEF.md` contains strict scope, files allowed to touch, complete calculation contract, edge cases (`RangeError`), and zero-dependency constraint. |
| 5 | **AI-LOG.md** | 15 | 15 | `AI-LOG.md` tracks 3 structured entries specifying tool used, what AI produced, what was changed/rejected, and what was written by hand with specific diff correlation. |
| **Total** | | **100** | **100** | |

---

## What I did not manage
None. All requirements, quality gates, unit tests, and continuous integration workflows were successfully implemented and verified locally and via CI.
