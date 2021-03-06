const rl = require("readline-sync");
const print = console.log;

const checkId=function(allUsers){
    let accountId=-1;
    let index=-1;
    while (true) {
        accountId = Number(rl.question("> "));
        index = allUsers.findIndex(user => user.id === accountId);
        if ( index >= 0 ) {
            break;
        }
        print("$ An account with that ID does not exist. Try again.");
    }
    return index;
}

const requestPassword = function(user) {
    let password = "";
    while (true) {
        password = rl.question("> ");
        if (password === user.password) {
            break;
        }
        print("$ Wrong password, try typing it again.");
    }
    print(`$ Correct password. We validated you as ${user.name}.`);
}

module.exports={
    checkId,
    requestPassword
}