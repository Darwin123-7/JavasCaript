let userName = "Darwin A. Frias";
let balance = 100;

console.log(`Username: ${userName}`);
let arr =["Status", "Withdraw", "Deposit", "Exit"];

for(let i = 0; i < arr.length; i++) {
    console.log([i + 1] + ". " + arr[i]);
}

console.log("Choose Service: ");
let user = +prompt();

while(true) {

    if (user ==  1) {
        console.log("---Check Status---")
        console.log("Name: " + userName);
        console.log("User Balance: " + userBalance);
    }

}