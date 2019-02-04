import Invoices from "../src/Modules/Invoices";
import invoices_json from "../src/Modules/Invoices/invoices";

const INVOICES = new Invoices();

describe("Invoices", () => {
  beforeAll(async () => {
    await INVOICES.signIn(invoices_json.invoices_url);
  });

  afterAll(() => {
    INVOICES.closeDriver();
  });

  it("Should be sign in", async () => {
    await INVOICES.waitForElement(invoices_json.invoice_title);
    const $el = await INVOICES.getElementText(invoices_json.invoice_title);
    await expect($el).toEqual("Invoices");
    await expect(await INVOICES.getBrowserUrl()).toContain(invoices_json.invoices_url);
  });

  it("Should be search", async () => {
    let invoiceNo = "11410";
    await INVOICES.search(invoiceNo);
    await INVOICES.waitForElement(invoices_json.invoice_number_link);
    const $el = await INVOICES.getElementText(invoices_json.invoice_number_link);
    await expect($el.trim()).toEqual(invoiceNo);
  });
});
