import inquirer from "inquirer";
let isBookAvailable = true;
let answer = await inquirer.prompt([{
        message: "How many books you already borrowed?",
        type: "number",
        name: "userBorrowedBooks",
    },
    {
        name: "userBorrow",
        type: "number",
        message: "How many books you want to borrow?"
    }]);
const maxAllowedBooks = 5;
if (isBookAvailable && answer.userBorrow + answer.userBorrowedBooks <= maxAllowedBooks) {
    console.log("You can Borrow books...");
}
else if (isBookAvailable && answer.userBorrowedBooks === maxAllowedBooks || answer.userborrow <= maxAllowedBooks) {
    console.log("More than 5 books are not allowed to borrow. You already borrowed 5 books");
}
else if (isBookAvailable && answer.userborrow >= maxAllowedBooks || answer.userBorrowedBooks <= maxAllowedBooks) {
    console.log("More than 5 books are not allowed to borrow. Please lower your range");
}
