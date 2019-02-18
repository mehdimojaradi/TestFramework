import InvoicePage from "../PageObjects";
import invoice from "../Elements/Invoice";

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
    const $el = await invoicePage.getElementText(invoice.$title);
    await expect($el).toEqual("Invoices");
    await expect(await invoicePage.getBrowserUrl()).toContain(invoice.url);
  });

  it("should find invoice", async () => {
    let id = "11410";
    await invoicePage.findInvoiceBy(id);
    const $el = await invoicePage.getElementText(invoice.$number_link);
    await expect($el.trim()).toEqual(id);
    await invoicePage.setDelay(3000);
  });
 
});
