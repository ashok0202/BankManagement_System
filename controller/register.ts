// deno-lint-ignore-file
import { MESSAGE } from "../constrains/message.ts";
import { ACCOUNT_MESG } from "../constrains/message.ts";
import { Account } from "../models/model.ts";
import { BankRepo } from "../repository/repo.ts";
import BankServ from "../service/service.ts";

const bankRepo=new BankRepo();
const bank=new BankServ(bankRepo);
export  async function register():Promise<void> {
        console.log(MESSAGE.ACCOUNT_DETAILS);

        const Username:string|null=prompt("Enter Account Holder name: ")||"";
        const balance:number|null = parseInt(prompt("Enter the balanace :")||"0");
        const panNo:string=prompt("Enter the Your panNumber: ")||"";
        const phoneno:number=parseInt(prompt("Enter the Your phone number: ")||"");
        const passw:string=prompt("Enter the Password:")||"";
    
        const user:Account={
            accountNo:Math.floor(Math.random()*1000000000000),
            name:Username,
            balance:balance,
            panNo:panNo,
            phoneNO:phoneno,
            password:passw
        }
        bank.addAccount(user);
        console.log(ACCOUNT_MESG.SUCCESS_ACC);
}

export async function depositeAmmount():Promise<void> {
        console.log("Deposite Amount.....");
        const phoneNo:number=parseInt(prompt(ACCOUNT_MESG.PHONE_NO)||"");
        const addAmmount:number= parseInt(prompt(ACCOUNT_MESG.AMMOUNT)||"0");
        bank.addBalance(phoneNo,addAmmount);
        
    
}

export async function withDrawAmmount():Promise<void> {
    console.log("Debit/Withdraw Amount .....");
    const debitphoneNo:number=parseInt(prompt(ACCOUNT_MESG.PHONE_NO)||"");
    const depitAmmount:number= parseInt(prompt(ACCOUNT_MESG.AMMOUNT)||"0");
    bank.withDrawAmmount(debitphoneNo,depitAmmount);
    
}

export async function showBalances():Promise<void> {
    console.log("Show Balance.....!");
    const showphoneNo:number=parseInt(prompt(ACCOUNT_MESG.PHONE_NO)||"");
    bank.showBalance(showphoneNo);
    
}