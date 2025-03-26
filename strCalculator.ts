export function add(strNum: string): number {
  if (strNum === '') return 0

  let numsDelimiter = /,|\n/

  if (strNum.startsWith('//')) {
    const strPart   = strNum.split('\n')
    const delimiter = strPart[0].slice(2) 
    numsDelimiter   = new RegExp(delimiter)
    strNum          = strPart[1] // reminder of delimiter syntax
  }

  const nums = strNum.split(numsDelimiter).map(Number)
  const negativeNumIndex = nums.findIndex((num) => num < 0)
  if (negativeNumIndex !== -1)
    throw new Error(`negative numbers are not allowed: ${nums[negativeNumIndex]}`)

  return nums.reduce((sum, num) => sum + num, 0)
}