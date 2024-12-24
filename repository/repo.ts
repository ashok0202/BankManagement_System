// deno-lint-ignore-file
import { MESSAGE } from "../constrains/message.ts";
import { ACCOUNT_MESG } from "../constrains/message.ts";
import { Account } from "../models/model.ts";

export class BankRepo{
    private account:Array<Account>=[{
        accountNo: 98765432123,
        name: "Ashok",
        balance: 1000,
        panNo: "ASPAN9876123",
        phoneNO: 9876543211,
        password: "A@123"
    },
    {
        accountNo: 98765432124,
        name: "Ravi",
        balance: 2000,
        panNo: "RVPAN1234567",
        phoneNO: 9876543212,
        password: "R@123"
    },
    {
        accountNo: 98765432125,
        name: "Priya",
        balance: 1500,
        panNo: "PYPAN2345678",
        phoneNO: 9876543213,
        password: "P@123"
    },
    {
        accountNo: 98765432126,
        name: "Neha",
        balance: 3000,
        panNo: "NHPAN3456789",
        phoneNO: 9876543214,
        password: "N@123"
    },
    {
        accountNo: 98765432127,
        name: "Arun",
        balance: 2500,
        panNo: "ARPAN4567890",
        phoneNO: 9876543215,
        password: "A@456"
    }];
     obj:Account={
        accountNo: 98765432123,
        name: "Ashok",
        balance: 1000,
        panNo: "ASPAN9876123",
        phoneNO: 9876543211,
        password: "A@123"
    }

    public addAccount(user:Account) : Account {
        this.account.push(user);
        console.log(`Account added successfully! ID: ${user.accountNo}, Name: ${user.name}, Balance: ₹${user.balance}`);
        return user;
    }
    public creditAmount(phone: number, amount: number): void {
        const user: Account | undefined = this.account.find(user1 => user1.phoneNO === phone);
        if (user) {
            user.balance += amount; // Updated balances
            console.log(`USer accountNo: ${user.accountNo} and actualAmmount is ${user.balance}`);
            console.log(ACCOUNT_MESG.DEPOSITE_ACC);
            return;
        } else {
            console.error(`Account with phone number ${phone} not found.`);
            return;  
        }
    }
    public withDrawAmmount(phone:number,amount:number):void{
        const user:Account|undefined=this.account.find(user1=>user1.phoneNO===phone);
        if(user){
            if(user.balance>amount){
                user.balance-=amount; //withdraw Ammount;

                console.log(`The AccountNo: ${user.accountNo} actualAmmount: ${user.balance}`);
                console.log(ACCOUNT_MESG.WITHDRAW_ACC); 
            }
            else{
                console.error(ACCOUNT_MESG.INSUFFICIENT);
                return;
            }
        }
        else{
            console.error(`The Phone ${phone} no USer is present`);
            return;
        }
    }
    public showBalance(phone: number): void {
        const user = this.account.find(user => user.phoneNO === phone);
        if (user) {
          console.log(user.balance);
        } else {
          console.error(MESSAGE.USER_NOT+phone); 
        }
      }

    
}