// const readline = require("readline-sync");
// let answer = readline.question("Give me an answer: ");
// console.log(answer);

const rl = require("readline-sync");
const {showHelp, createAccount, doesAccountExist, accountBalance, changeName, withDraw}=require("./bankingFunctions") //take functions from others files.'
const print = console.log;




let allUsers = [{
    name:"mikko mallikas",
    balance:123,
    password:"salasana",
    id:1, //ID's will be 1-5.. -1 wont be possible...
    fund_request:[],
    }

];
let cmd = "";
let quit = 0;

// H3.1 Welcome to the banking system
print("$ Welcome to Buutti banking CLI!");
print('$ Hint: You can get help with the commands by typing "help".');

while (true) {
  cmd = rl.question("> ");

  if (cmd === "help") showHelp();
  else if (cmd === "create_account") {
    const user = createAccount();
    // allUsers.push(user) 
    allUsers=[...allUsers, user] 
  } else if (cmd === "does_account_exist") {
    doesAccountExist(allUsers);
  } else if (cmd === "account_balance") {
    accountBalance(allUsers);
  } else if (cmd === "change_name") {
    changeName(allUsers)
  } else if (cmd === "withdraw_funds") {
    withDraw(allUsers)
  } else if (cmd === "quit") break;
}

console.log(allUsers)