# IA#1 — Brief for Assistant

## Task Description
Implement the shopping cart calculation function `cartTotal(items, options)` in plain modern JavaScript (ES Modules).

## Allowed Scope & Files
- **Files it may touch:**
  - `src/cart.js` (target implementation)
  - `test/cart.test.js` (test suite)
  - `scripts/gate.js` (quality gate)
- **Files it must NOT touch:**
  - `package.json` (must not add runtime dependencies or alter module setup)

## Strict Constraints
- **Zero Dependencies:** Plain JavaScript only. No external npm packages (no lodash, no jest, etc.). Use only Node.js built-ins (`node:test`, `node:assert/strict`).
- **Return Type:** Must return a `Number`, rounded to the nearest whole đồng (`Math.round`), **never** a string (do not use `toFixed`).

## Contract & Specification
1. **Inputs:**
   - `items`: Array of objects `[{ name: string, price: number, qty: number }]`
   - `options`: Object `{ vatRate: number, freeShipFrom: number, shipFee: number }`
2. **Calculation Rules:**
   - `subtotal`: Sum of `price * qty` across all items in cart.
   - `VAT`: `subtotal * vatRate`.
   - `shipping`: `0` when `subtotal >= freeShipFrom`, otherwise `shipFee`.
   - `total`: `Math.round(subtotal + VAT + shipping)`.
3. **Edge Cases & Error Handling:**
   - Empty cart (`[]` or no items) must return `0` (no VAT, no shipping applied).
   - Throw `RangeError` if any item has a negative `price` (`price < 0`).
   - Throw `RangeError` if any item has a `qty` that is not a positive integer (`qty <= 0` or `!Number.isInteger(qty)`).
