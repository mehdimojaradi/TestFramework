import Helper from "../../Core/Helper";
import invoices_json from "../Invoices/invoices";

class Invoices extends Helper {
  constructor() {
    super();
  }

  async search(invoiceNumber) {
    try {
      await this.waitForElement(invoices_json.invoice_no_id);
      await this.fillElementByCss(invoices_json.invoice_no_id, invoiceNumber);
      await this.clickButton(invoices_json.search_button);
      return true;
    } catch (e) {
      console.error(`Can not search. ${e}`);
      return false;
    }
  }
}

export default Invoices;
