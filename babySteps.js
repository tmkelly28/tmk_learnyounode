var numbers = process.argv.slice(2);
var result = 0;
for (var i = 0; i < numbers.length; i++) {
  result += Number(numbers[i]);
}
console.log(result);