//Arithematic Operator
let x = 10;
let y = 2;
//Addition operator
let sumAdd = x + y;
console.log(sumAdd);
//subtraction operator
let sumSub = x - y;
console.log(sumSub);
//Multiplication operator
let sumMult = x * y;
console.log(sumMult);
//Division operator
let sumDiv = x / y;
console.log(sumDiv);
//Modulus operator
let sumModu = x % y;
console.log(sumModu);
//Exponentiation operator
let sumExp = x ** y;
console.log(sumExp);
//since there is postincrement operator then the value first remained same when logged but when we further did any operation then its value changed by 1.
let sumPostIncr = x++;
console.log(sumPostIncr); //since it is post increment therefor the value of x did not change
console.log(x + y); //now the value of x has increased by one
//since it is preincrement so the value of 5 is first increased then consoled
let z = 5;
let sumPreIncr = ++z;
console.log(sumPreIncr);
//since there is postincrement operator then the value first remained same when logged but when we further did any operation then its value changed by 1.
let v = 5;
let u = 10;
let sumPostDecr = v--;
console.log(sumPostDecr); //since it is post increment therefor the value of x did not change
console.log(v + u); //now the value of x has increased by one
//since it is preincrement so the value of 5 is first increased then consoled
let w = 5;
let sumPreDecr = --w;
console.log(sumPreDecr);
export {};
