import Helper from "../Core/Helper";

//#region Invoice Property
const _INVOICE_NUMBER_LINK =
  "#invoice-list-tables > div:nth-child(2) > table > tbody:nth-child(2) > tr > td:nth-child(1) > a";
const _INVOICE_TITLE = "#area > div > h1";
const INVOICE_NO_ID = "#invoice_number_id";
const SEARCH_BUTTON =
  '#ui-tabs-1 > div > fieldset > form > div > input[type="submit"]:nth-child(2)';
//#endregion

class Invoices extends Helper {
  constructor() {
    super();
  }

  get INVOICE_NUMBER_LINK() {
    return _INVOICE_NUMBER_LINK;
  }

  get INVOICE_TITLE() {
    return _INVOICE_TITLE;
  }

  async search(invoiceNO) {
    try {
      await this.waitForElement(INVOICE_NO_ID);
      await this.fillElementByCss(INVOICE_NO_ID, invoiceNO);
      await this.clickButton(SEARCH_BUTTON);
      return true;
    } catch (e) {
      console.error(`Can not search. ${e}`);
      return false;
    }
  }
}

export default Invoices;
