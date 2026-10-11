import { test } from 'node:test'
import assert from 'node:assert/strict'
import { cartTotal } from '../src/cart.js'

test('the example from the slides', () => {
  const items = [
    { name: 'Áo thun', price: 180000, qty: 2 },
    { name: 'Sổ tay', price: 45000, qty: 1 },
  ]
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }
  assert.equal(cartTotal(items, options), 467400)
})

test('empty cart returns 0, no VAT, no shipping', () => {
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }
  assert.equal(cartTotal([], options), 0)
  assert.equal(cartTotal([], {}), 0)
  assert.equal(cartTotal(), 0)
})

test('subtotal >= freeShipFrom qualifies for free shipping', () => {
  // Exactly equal to freeShipFrom threshold
  const itemsExact = [{ name: 'Giày', price: 500000, qty: 1 }]
  const options = { vatRate: 0.1, freeShipFrom: 500000, shipFee: 30000 }
  // Subtotal = 500000, VAT = 50000, Shipping = 0 -> Total = 550000
  assert.equal(cartTotal(itemsExact, options), 550000)

  // Strictly above freeShipFrom threshold
  const itemsAbove = [{ name: 'Laptop', price: 1000000, qty: 1 }]
  // Subtotal = 1000000, VAT = 100000, Shipping = 0 -> Total = 1100000
  assert.equal(cartTotal(itemsAbove, options), 1100000)
})

test('subtotal < freeShipFrom applies shipping fee', () => {
  const items = [{ name: 'Bút', price: 10000, qty: 1 }]
  const options = { vatRate: 0.1, freeShipFrom: 500000, shipFee: 30000 }
  // Subtotal = 10000, VAT = 1000, Shipping = 30000 -> Total = 41000
  assert.equal(cartTotal(items, options), 41000)
})

test('result is a number and rounded to whole đồng', () => {
  const items = [{ name: 'Mặt hàng lẻ', price: 33333, qty: 1 }]
  const options = { vatRate: 0.08, freeShipFrom: 100000, shipFee: 15000 }
  // Subtotal = 33333, VAT = 2666.64, Shipping = 15000 -> Total = 50999.64 -> round to 51000
  const result = cartTotal(items, options)
  assert.equal(typeof result, 'number')
  assert.equal(result, 51000)
})

test('throws RangeError on negative price', () => {
  const items = [{ name: 'Lỗi giá', price: -5000, qty: 1 }]
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }
  assert.throws(() => cartTotal(items, options), RangeError)
})

test('throws RangeError on non-positive integer qty (0, negative, fractional)', () => {
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }

  // qty = 0
  assert.throws(
    () => cartTotal([{ name: 'Item', price: 10000, qty: 0 }], options),
    RangeError
  )

  // negative qty
  assert.throws(
    () => cartTotal([{ name: 'Item', price: 10000, qty: -2 }], options),
    RangeError
  )

  // fractional qty (1.5)
  assert.throws(
    () => cartTotal([{ name: 'Item', price: 10000, qty: 1.5 }], options),
    RangeError
  )
})
