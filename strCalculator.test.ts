import { add } from "./strCalculator"

test('return 0 for empty string', () => {
  expect(add('')).toBe(0)
})