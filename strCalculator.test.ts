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

test('return sums with newline', () => {
  expect(add('1\n2,3')).toBe(6)
})

test('return sums with custom delimiter', () => {
  expect(add('//;\n1;2')).toBe(3)
})

test('throws error if any negative number', () => {
  expect(() => add('1,-2,5')).toThrow('negative numbers are not allowed: -2')
})
