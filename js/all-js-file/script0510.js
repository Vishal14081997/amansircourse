// const num = "99";
// const num1 = 99;

// const newNum = Number(num);

// document.write(newNum + num1 );

// ..................................

const num = "99.99";
// const newNum = Number(num)
// const newNum = parseInt(num)
const newNum2 = parseFloat(num)

// document.write(typeof newNum , newNum)
document.write(typeof newNum2 , newNum2)


console.log(parseInt("42"));       // Output: 42
console.log(parseInt("42px"));    // Output: 42
console.log(parseInt("abc42"));   // Output: NaN
console.log(parseInt("101",2));   // Output :5
// (1×2  ki power 2)+(0×2 ki power 1 )+(1×2  ki power 0 ) = 4+0+1=5
console.log(parseFloat("123.45abc")); // Output: 123.45
console.log(parseFloat("abc123.45")); // Output: NaN
console.log(parseFloat("Hello"));  // Output: NaN
console.log(parseFloat(" "));      // Output: NaN
