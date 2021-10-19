const s = [5, 7, 2];
function editInPlace() {
  // Only change code below this line

  // Using s = [2, 5, 7] would be invalid
  let y = [2, 5, 7]
  for (let i = 0; i < s.length; i++) {
    s[i] = y[i];
  }

  // Only change code above this line
}
editInPlace();