// deno-lint-ignore-file
import { MESSAGE } from "../constrains/message.ts";
import  {register, depositeAmmount, withDrawAmmount, showBalances } from "../controller/register.ts";

async function bankService(): Promise<void> {
  console.log(MESSAGE.WELCOME_MESG);

  while (true) {
    console.log("\n1. Create Account");
    console.log("2. Deposit Amount");
    console.log("3. WithDraw Amount");
    console.log("4. show Balance ");
    console.log("5. De-Activite Account")
    console.log("6. Exit");
    
    const opt:string = prompt("Enter an option: ")||"";
    if(!opt||isNaN(parseInt(opt))||opt===null){
      console.log("Please , Enter valid Option")
    }

    switch (parseInt(opt)) {
      case 1:
        await register();
        break;
      case 2:
        await depositeAmmount();
        break;
      case 3:
        await withDrawAmmount();
        break;
      case 4:
        await showBalances();
        break;
      case 6:
        console.log(MESSAGE.THANK_MESG);
        Deno.exit(0);  
      default:
        console.log(MESSAGE.INVALID_OPT);
    }
  }
}
bankService();
