import InvoicePage from "../src/Modules/Invoices";
import invoice from "../src/Modules/Invoices/invoice";

let invoicePage = new InvoicePage();

describe("Invoices", () => {
  beforeAll(async () => {
    await invoicePage.signIn(invoice.url);
  });

  afterAll(() => {
    invoicePage.closeDriver();
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
  });

  it("should edit general invoice item", async () => {
    let id = "11438";
    await invoicePage.findInvoiceBy(id);
    await invoicePage.waitForElement(invoice.$number_link);
    await invoicePage.clickButton(invoice.$number_link);
    await invoicePage.waitForElement(invoice.$edit_item_dialog_button);
    await invoicePage.clickButton(invoice.$edit_item_dialog_button);
    await invoicePage.waitForElement(invoice.$edit_item_dialog_save_button);
    await invoicePage.clickButton(invoice.$edit_item_dialog_save_button);
    const isVisible_dialog = await invoicePage.elementIsDisplayed(invoice.$edit_item_dialog);
    await expect(isVisible_dialog).toBeFalsy();
  });

  it("should get dropdown value", async () => {
    await invoicePage.waitForElement("#client_id");
    await invoicePage.getSelectedValue();
    invoicePage.setDelay(2000);
  });
});
