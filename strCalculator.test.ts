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

test('throws negative numbers', () => {
  expect(() => add('1,-2,5,-8,10')).toThrow('negative numbers are not allowed: -2, -8')
})

test('ignore sums when number is bigger than 1000', () => {
  expect(add('7,1001,2517')).toBe(7)
})

test('return sums with custom delimiter any length', () => {
  expect(add('//[***]\n1***2***3')).toBe(6)
})