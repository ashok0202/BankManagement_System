import { Account } from "../models/model.ts";
import { BankRepo } from "../repository/repo.ts";

export default class BankServ {
    private bankRepo: BankRepo;

    constructor(bankRepo: BankRepo) {
        this.bankRepo = bankRepo; 
    }

    public addAccount(user:Required<Account>) {
        return this.bankRepo.addAccount(user); 
    }

    public addBalance(phone:number,ammount:number):void{
        return this.bankRepo.creditAmount(phone,ammount);
    }

    public withDrawAmmount(phone:number,amount:number):void{
        this.bankRepo.withDrawAmmount(phone,amount);
    }

    public showBalance(phone:number):void{
        this.bankRepo.showBalance(phone);
    }
}
