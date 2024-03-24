import chalk from "chalk";
//Assignment operators
let a = 15;
let b = 10;
console.log(a, b);
a -= a - a + a;
console.log(`a(15) - a(15) - a(15) - a(15) = ${chalk.yellow.bold(a)}`);
let c = 3;
c += c + b;
console.log(`c(3) + c(3) +b(6) = ${chalk.yellow.bold(c)}`);
let d = 3;
d += d;
console.log(`The result of d(3) + d(3) = ${chalk.yellow.bold(d)}`);
let e = 8;
e -= b;
console.log(`E(8) - B(6) = ${chalk.yellow.bold(e)}`);
