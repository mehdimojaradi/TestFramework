import Helper from "../Core/Helper";


class Invoices extends Helper {
  constructor() {
    super();
    this._regions = {
      invoices_url: "invoices",
      invoice_title: "#area > div > h1",
      invoice_number_link:
        "#invoice-list-tables > div:nth-child(2) > table > tbody:nth-child(2) > tr > td:nth-child(1) > a",
      invoice_title: "#area > div > h1",
      invoice_no_id: "#invoice_number_id",
      search_button:
        '#ui-tabs-1 > div > fieldset > form > div > input[type="submit"]:nth-child(2)'
    };
  }
  
  region(name) {
    return this._regions[name];
  }

  async search(invoiceNumber) {
    try {
      await this.waitForElement(this.region("invoice_no_id"));
      await this.fillElementByCss(this.region("invoice_no_id"), invoiceNumber);
      await this.clickButton(this.region("search_button"));
      return true;
    } catch (e) {
      console.error(`Can not search. ${e}`);
      return false;
    }
  }
}

export default Invoices;
