import Invoices from "../src/Modules/Invoices";

//#region Invoices Property
const INVOICES_URL = "invoices";
let invoices = new Invoices();
//#endregion

describe("Invoices", () => {
  beforeAll(async () => {
    await invoices.signIn(INVOICES_URL);
  });

  afterAll(() => {
    invoices.closeDriver();
  });

  it("Should be sign in", async () => {
    await invoices.waitForElement(invoices.INVOICE_TITLE);
    const $el = await invoices.getElementText(invoices.INVOICE_TITLE);
    await expect($el).toEqual("Invoices");
    await expect(await invoices.getBrowserUrl()).toContain(INVOICES_URL);
  });

  it("Should be search", async () => {
    let invoiceNo = "11410";
    await invoices.search(invoiceNo);
    await invoices.waitForElement(invoices.INVOICE_NUMBER_LINK);
    const $el = await invoices.getElementText(invoices.INVOICE_NUMBER_LINK);
    await expect($el.trim()).toEqual(invoiceNo);
  });
});
