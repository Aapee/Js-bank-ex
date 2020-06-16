// H3.2 Help and quit

const rl = require("readline-sync");
const print = console.log;
const helpers=require('./helpfunctions.js')

const showHelp=function(){
    print('Here’s a list of commands you can use!');
    print('')
    print('help                Opens this dialog.')
    print('quit                Quits the program.')
    print('')
    print('Account actions')
    print('create_account      Opens a dialog for creating an account.')
    print('close_account       Opens a dialog for closing an account.')
    print('change_name         Opens a dialog for changing the name associated with an account.')
    print('does_account_exist  Opens a dialog for checking if an account exists.')
    print('account_balance     Opens a dialog for logging in and prints the account balance.')
    print('')
    print('Fund actions')
    print('withdraw_funds      Opens a dialog for withdrawing funds.')
    print('deposit_funds       Opens a dialog for depositing funds.')
    print('transfer_funds      Opens a dialog for transferring funds to another account.')
    print('')
    print('Fund requests')
    print('request_funds       Opens a dialog for requesting another user for funds.')
    print('fund_requests       Shows all the fund requests for the given account.')
    print('accept_fund_request Opens a dialog for accepting a fund request.')
}

const createAccount =function(){
    const newUser={
        name:"",
        balance:0,
        password:"",
        id:-1, //ID's will be 1-5.. -1 wont be possible...
        fund_request:[],
    }


    print('Creating a new user account!')
    print('Insert your name.')
    newUser.name=rl.question("> ") //ask name from the user

    print(`Hello, ${newUser.name} It’s great to have you as a client.`)
    print('How much is your initial deposit? (The minimum is 10€)')
    newUser.balance=Number(rl.question("> ")); //if not a number (ABC), return will give us NAN

    while(newUser.balance<10){
    print('Unfortunately we can’t open an account for such a small account. Do you have any more cash with you?') 
    newUser.balance=Number(rl.question("> ")); //if not a number (ABC), return will give us NAN
    }


    print(`Great, ${newUser.name} You now have an account with a balance of ${newUser.balance}.`)
    print('We’re happy to have you as a customer, and we want to ensure that your money is safe with us.') 
    print('Give us a password, which gives only you the access to your account.')
    newUser.password=(rl.question("> "))


    newUser.id= Math.floor(Math.random()*10) //make Personal ID 0-100
    print('hunter12')
    print('Your account is now created.')
    print(`Account id: ${newUser.id}`)
    print('Store your account ID in a safe place.')
    return newUser;
}



// H3.4 Does an account exist
// The does_account_exist command starts a dialog sequence as well. Find if the account in question is stored in all_users array.
const doesAccountExist=function(allUsers){

print('Checking if an account exists!')
print('Enter the account ID whose existence you want to verify.')
helpers.checkId(allUsers);
print('This account exists.')
}





// Funds
const accountBalance = function(allUsers){
    let ind=-1;

    console.log(allUsers[ind])
    print('Checking your account balance!*')
    print('What is your account ID?')
    ind=helpers.checkId(allUsers)

    print('Account found! Insert your password.')
    helpers.requestPassword(allUsers[ind]);
    

    print(`Your account balance is ${allUsers[ind].balance}€.`)
    }


    const changeName =function(allUsers){
        let ind=-1;
        let name="";

        print('Changing the name associated with your account!')
        print('What is your account ID?')
        ind=helpers.checkId(allUsers);

        print('Account found! Insert your password.')
        helpers.requestPassword(allUsers[ind])
       

        print('But it appears you want to change your name.')
        print('Which name should we change your name to?')
        allUsers[ind].name=rl.question("> ")

        print(`We will address you as ${allUsers[ind].name} from now on.`)
    }

//     H3.7 Withdraw funds
// The withdraw_funds command starts a dialog sequence as well. Reuse elements from H2.5.4 and H2.5.6 for checking if an account exists and logging

    const withDraw =function(allUsers){
        let ind=-1;
        let withdrawAmount=-1;

        print('Withdrawing cash!')
        print('What is your account ID?')
        ind=helpers.checkId(allUsers)

        print('Account found! Insert your password.')
        helpers.requestPassword(allUsers[ind])
       

        print(`How much money do you want to withdraw? Current balance is ${allUsers[ind].balance}`)
        withdrawAmount=Number(rl.question("> "))
        while(withdrawAmount > allUsers[ind].balance || isNaN(withdrawAmount)){
            print('Unfortunately you don’t have the balance for that. Try a smaller amount.')
             withdrawAmount=Number(rl.question("> "));
        }
        allUsers[ind].balance=allUsers[ind].balance-withdrawAmount;
        print(`Withdrawing a cash sum of ${withdrawAmount}. Your account balance is now ${allUsers[ind].balance} €.`)
    }


module.exports={
    showHelp, 
    createAccount, 
    doesAccountExist, 
    accountBalance,
    changeName,
    withDraw,
}

