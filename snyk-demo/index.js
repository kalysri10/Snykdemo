const lodash = require('lodash');

function main() {
  console.log('Snyk demo app is running.');
  const numbers = [1, 2, 3];
  const reversedNumbers = lodash.reverse(numbers);
  console.log('Reversed numbers:', reversedNumbers);
}

main();

