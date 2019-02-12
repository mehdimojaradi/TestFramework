import InvoicePage from "../PageObjects";
import invoice from "../Elements/invoice";

describe("Invoices", () => {
  let invoicePage;

  beforeAll(async () => {
    invoicePage = new InvoicePage();
    await invoicePage.signIn(invoice.url);
  });

  afterAll(() => {
    invoicePage.closeDriver();
  });

  beforeEach(async () => {
    await invoicePage.gotoPage(invoice.url);
  });

  it("should sign in", async () => {
    await invoicePage.waitForElement(invoice.$title);
    const $el = await invoicePage.getElementText(invoice.$title);
    await expect($el).toEqual("Invoices");
    await expect(await invoicePage.getBrowserUrl()).toContain(invoice.url);
  });

  it("should find invoice", async () => {
    let id = "11410";
    await invoicePage.findInvoiceBy(id);
    await invoicePage.waitForElement(invoice.$number_link);
    const $el = await invoicePage.getElementText(invoice.$number_link);
    await expect($el.trim()).toEqual(id);
    await invoicePage.setDelay(3000);
  });

  
  it("should get dropdown value", async () => {
    const $client_option = "AltaGas Processing Partnership";
    await invoicePage.waitForElement(invoice.$client_el);
    await invoicePage.getSelectedValue(invoice.$client_el, $client_option);
  });
});
