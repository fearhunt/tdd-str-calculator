import { add } from "./strCalculator"

test('return 0 for empty string', () => {
  expect(add('')).toBe(0)
})

test('return input number', () => {
  expect(add('1')).toBe(1)
})

test('return sums of two number comma-separated', () => {
  expect(add('1,5')).toBe(6)
})

test('return sums of multiple numbers comma-separated', () => {
  expect(add('1,5,3,2')).toBe(11)
})