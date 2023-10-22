# CPF Validation with JavaScript and Regex

This JavaScript code snippet demonstrates how to validate a Brazilian CPF (Cadastro de Pessoa Física) using regular expressions and the Luhn algorithm. The script removes non-digit characters, calculates verification digits, and checks if the CPF is valid.

## Usage

1. Replace the `const cpf` variable with the CPF you want to validate.
2. Run the script to see if the CPF is valid.

## Explanation

- The script follows these steps:
  1. Remove non-digit characters from the input CPF using regex.
  2. Extract the first 9 digits of the CPF.
  3. Convert the cleaned CPF into an array of digits.
  4. Calculate the verification digits (d1 and d2) using the Luhn algorithm.
  5. Combine the validated digits into a string.
  6. Check if the cleaned CPF matches the validated CPF.

## Example

```javascript
// Example CPF
const cpf = '111.716.704-60';

// ... (code continues)

// Check if the CPF is valid
if (cpfClean === cpfFinal) {
  console.log('CPF is valid');
} else {
  console.log('Invalid CPF');
}
