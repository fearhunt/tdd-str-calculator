import { add } from "./strCalculator"

test('return 0 for empty string', () => {
  expect(add('')).toBe(0)
})

test('return input number', () => {
  expect(add('1')).toBe(1)
})