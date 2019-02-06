import InvoicePage from "../src/Modules/Invoices";
import invoice from "../src/Modules/Invoices/invoice";

describe("Invoices", () => {
  let invoicePage;

  beforeAll(async () => {
    invoicePage = new InvoicePage();
    await invoicePage.signIn(invoice.url);
  });

  afterAll(() => {
    invoicePage.closeDriver();
  });

  it("Should be sign in", async () => {
    await invoicePage.waitForElement(invoice.$title);
    const $el = await invoicePage.getElementText(invoice.$title);
    await expect($el).toEqual("Invoices");
    await expect(await invoicePage.getBrowserUrl()).toContain(invoice.url);
  });
  it("should get dropdown value", async() => {
    await invoicePage.waitForElement("#client_id");
    await invoicePage.getSelectedValue();
    invoicePage.setDelay(2000);
  });
  
  it("Should be search", async () => {
    let id = "11410";
    await invoicePage.findInvoiceBy(id);
    await invoicePage.waitForElement(invoice.$number_link);
    const $el = await invoicePage.getElementText(invoice.$number_link);
    await expect($el.trim()).toEqual(id);
    await invoicePage.setDelay(3000);
  });

});
