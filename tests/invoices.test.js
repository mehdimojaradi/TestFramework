import Invoices from "../src/Modules/Invoices";

//#region Invoices Property
let invoices = new Invoices();
//#endregion

describe("Invoices", () => {
  beforeAll(async () => {
    await invoices.signIn(invoices.region("invoices_url"));
  });

  afterAll(() => {
    invoices.closeDriver();
  });

  it("Should be sign in", async () => {
    await invoices.waitForElement(invoices.region("invoice_title"));
    const $el = await invoices.getElementText(invoices.region("invoice_title"));
    await expect($el).toEqual("Invoices");
    await expect(await invoices.getBrowserUrl()).toContain(invoices.region("invoices_url"));
  });

  it("Should be search", async () => {
    let invoiceNo = "11410";
    await invoices.search(invoiceNo);
    await invoices.waitForElement(invoices.region("invoice_number_link"));
    const $el = await invoices.getElementText(invoices.region("invoice_number_link"));
    await expect($el.trim()).toEqual(invoiceNo);
  });
});
