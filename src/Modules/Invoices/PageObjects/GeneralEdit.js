import InvoicePage from "./index";
import invoice from "../Elements/Invoice";

class GeneralEditPage extends InvoicePage {
    constructor() {
        super();
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

export default GeneralEditPage;
