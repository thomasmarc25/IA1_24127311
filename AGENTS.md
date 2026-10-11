# AGENTS.md

## Mission
You are assisting on the CSC13008 Web Application Development course assignment for `cartTotal`.

## Core Constraints
1. **Plain JavaScript only:** Strictly no external npm dependencies (`package.json` must remain dependency-free).
2. **Built-in Node.js tools:** Use `node:test` and `node:assert/strict` for testing.
3. **Target Function:** `cartTotal(items, options)` in `src/cart.js`.

## Specification Summary
- `subtotal = sum(price * qty)`
- `vat = subtotal * vatRate`
- `shipping = subtotal >= freeShipFrom ? 0 : shipFee`
- `total = Math.round(subtotal + vat + shipping)`
- Empty cart `[]` returns `0`.
- Throw `RangeError` on negative `price` or non-positive integer `qty`.

## Interactive & Pre-Coding Rules
1. **Explain & Ask Before Coding:**
   - Always explain the proposed solution in clear, intuitive, and easy-to-understand terms before making code changes.
   - Break down logic step-by-step so the user can easily comprehend what is happening.
   - Ask for explicit user confirmation before writing or modifying code.
2. **Dynamic Rule Suggestions:**
   - If you identify useful rules, conventions, or improvements compatible with the project while working, propose them to the user first.
   - Never modify or add new rules without obtaining user approval first.

## Automatic Activity Logging (`AI-LOG.md`)
After producing code or completing a task, record an entry in `AI-LOG.md` using the required template:
```markdown
Date: YYYY-MM-DD
Tool Used: Antigravity / Gemini
Task: [Brief description of the prompt/task]
What AI produced: [Summary of the code/artifacts produced by AI]
What I changed/rejected: [LEAVE THIS BLANK FOR ME TO FILL] (AI can suggest notes here)
What I wrote by hand: [LEAVE THIS BLANK FOR ME TO FILL] (AI can suggest notes here)
```
- For `What I changed/rejected` and `What I wrote by hand`, leave the primary placeholder for the user, but provide helpful suggested notes or hints.

## Verification Commands
- `npm test`: Runs test suite (`node --test`).
- `npm run gate`: Runs all quality gates (dependency check, syntax check, and test suite).
