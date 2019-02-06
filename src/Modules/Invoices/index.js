import Helper from "../../Core/Helper";
import invoice from "./invoice";

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
}

export default InvoicePage;
