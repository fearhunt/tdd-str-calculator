export function add(strNum: string): number {
  if (strNum === '') return 0

  let numsDelimiter = /,|\n/

  if (strNum.startsWith('//')) {
    const strPart = strNum.split('\n')
    let delimiter = strPart[0].slice(2)

    if (delimiter.startsWith('[') && delimiter.endsWith(']')) {
      delimiter = 
        delimiter
          .slice(1, -1)
          .split('][')
          .map((d) => d.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
          .join('|')
    }

    numsDelimiter   = new RegExp(delimiter)
    strNum          = strPart[1] // remainder of delimiter syntax
  }

  const nums         = strNum.split(numsDelimiter).map(Number)
  const negativeNums = nums.filter((num) => num < 0)

  if (negativeNums.length > 0)
    throw new Error(`negative numbers are not allowed: ${negativeNums.join(', ')}`)

  return nums.reduce((sum, num) => {
    return num <= 1000 ? sum + num : sum
  }, 0)
}