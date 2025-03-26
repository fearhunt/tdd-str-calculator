export function add(strNum: string): number {
  if (strNum === '') return 0
  const nums = strNum.split(/,|\n/).map(Number)
  return nums.reduce((sum, num) => sum + num, 0)
}