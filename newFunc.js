function convertToInteger(str) {
  return parseInt(str);

}

convertToInteger("56");

function convertToInteger(str) {
return parseInt(str, 2);
}

convertToInteger("10011");

function checkEqual(a, b) {
 return a === b ? "Equal" : "Not Equal";
}

checkEqual(1, 2);

function checkSign(num) {
 return num > 0 ? "positive" 
 : num === 0 ? "zero"
 : "negative"
}