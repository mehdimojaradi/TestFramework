import Helper from "../../../Core/Helper";
import invoice from "../Elements/Invoice";

class InvoicePage extends Helper {
  constructor() {
    super();
  }

  async findInvoiceBy(number) {
    try {
      await this.waitForElement(invoice.$id);
      await this.fillElementByCss(invoice.$id, number);
      await this.clickButton(invoice.$search_button);
      return true;
    } catch (e) {
      console.error(`Can not search. ${e}`);
      return false;
    }
  }

async clickCreateInvoiceButton(){
  try{
    await this.waitForElement(invoice.$create_invoice_button);
    await this.clickButton(invoice.$create_invoice_button);
  }catch(e){
    console.error(`Can not click "Create Invoice" button. ${e}`);
  }
}

  async openInvoice(number) {
    try {
        await this.findInvoiceBy(number);
        await this.waitForElement(invoice.$number_link);
        await this.clickButton(invoice.$number_link);
        return true;
    } catch (e) {
        console.error(`Can not search. ${e}`);
        return false;
    }
  }
  
}

export default InvoicePage;
