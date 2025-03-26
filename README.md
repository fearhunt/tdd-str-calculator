# tdd-str-calculator

## Cases
- Simple String calculator with a method signature: int Add(string numbers)
- Allow the Add method to handle an unknown amount of numbers
- Allow the Add method to handle new lines between numbers (instead of commas)
- Support different delimiters
- Calling Add with a negative number will throw an exception “negatives not allowed” and the negative that was passed
- Numbers bigger than 1000 should be ignored
- Delimiters can be of any length
- Allow multiple delimiters, eg: `//[*][%]\n1*2%3` 

## Usage
### Installation
Ensure you have **Node.js** installed

```sh
npm install
```

### Running the Tests

```sh
npm test
```

## Example Cases

| Input                      | Output |
|----------------------------|--------|
| `""`                       | `0`    |
| `"1"`                      | `1`    |
| `"1,5"`                    | `6`    |
| `"1,5,3,2"`                | `11`   |
| `"1\n2,3"`                 | `6`    |
| `"//;\n1;2"`               | `3`    |
| `"//[***]\n1***2***3"`     | `6`    |
| `"//[*][%]\n1*2%3"`        | `6`    |
| `"//[***][%%]\n1***2%%3"`  | `6`    |
| `"7,1001,2517"`            | `7`    |
| `"1,-2,5"`                 | Error  |
| `"1,-2,5,-8,10"`           | Error  |
