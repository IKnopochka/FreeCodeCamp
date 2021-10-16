// Setup
var myArray = [];
var i = 10;

// Only change code below this line
do {
  myArray.push(i);
  i++;
}
while (i < 10)


function sum(arr, n) {
  // Only change code below this line
  return n <= 0 ? 0 : sum(arr, n - 1) + arr[n - 1];

  // Only change code above this line
}