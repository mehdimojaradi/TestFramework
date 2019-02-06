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

  it("should add general invoice item", async () => {
    let id = "11438";
    await invoicePage.findInvoiceBy(id);
    await invoicePage.waitForElement(invoice.$number_link);
    await invoicePage.clickButton(invoice.$number_link);

    await invoicePage.waitForElement(invoice.$add_item_dialog_button);    
    await invoicePage.clickButton(invoice.$add_item_dialog_button);

    await invoicePage.waitForElement(invoice.$add_invoice_item_itemname);
    await invoicePage.fillElementByCss(invoice.$add_invoice_item_itemname,'item 2');
    await invoicePage.fillElementByCss(invoice.$add_invoice_item_itemdescriotion,'description');
    await invoicePage.fillElementByCss(invoice.$add_invoice_item_price,'100');
    await invoicePage.fillElementByCss(invoice.$add_invoice_item_qty,'3');

    await invoicePage.waitForElement(invoice.$edit_item_dialog_save_button);
    await invoicePage.clickButton(invoice.$edit_item_dialog_save_button);
    let isVisible_dialog = await invoicePage.elementIsVisible(invoice.$edit_item_dialog);
    await expect(isVisible_dialog).toEqual(false);
  });

  it("should close add item dialog general invoice", async () => {
    let id = "11438";
    await invoicePage.findInvoiceBy(id);
    await invoicePage.waitForElement(invoice.$number_link);
    await invoicePage.clickButton(invoice.$number_link);

    await invoicePage.waitForElement(invoice.$add_item_dialog_button);    
    await invoicePage.clickButton(invoice.$add_item_dialog_button);

    await invoicePage.waitForElement(invoice.$add_item_dialog_close_button);
    await invoicePage.clickButton(invoice.$add_item_dialog_close_button);
    let isVisible_dialog = await invoicePage.elementIsVisible(invoice.$add_item_dialog_close_button);
    await expect(isVisible_dialog).toEqual(false);
  });

  it("should add adjust markup general invoice item", async () => {
    let id = "11438";
    await invoicePage.findInvoiceBy(id);
    await invoicePage.waitForElement(invoice.$number_link);
    await invoicePage.clickButton(invoice.$number_link);

    await invoicePage.waitForElement(invoice.$adjust_markup_dialog_button);    
    await invoicePage.clickButton(invoice.$adjust_markup_dialog_button);

    await invoicePage.waitForElement(invoice.$adjust_markup_dialog_percentage);
    await invoicePage.fillElementByCss(invoice.$adjust_markup_dialog_percentage,'15');

    await invoicePage.waitForElement(invoice.$adjust_markup_dialog_ok_button);
    await invoicePage.clickButton(invoice.$adjust_markup_dialog_ok_button);
    let isVisible_dialog = await invoicePage.elementIsVisible(invoice.$adjust_markup_dialog_ok_button);
    await expect(isVisible_dialog).toEqual(false);
  });

  it("should cancel adjust markup general invoice item", async () => {
    let id = "11438";
    await invoicePage.findInvoiceBy(id);
    await invoicePage.waitForElement(invoice.$number_link);
    await invoicePage.clickButton(invoice.$number_link);

    await invoicePage.waitForElement(invoice.$adjust_markup_dialog_button);    
    await invoicePage.clickButton(invoice.$adjust_markup_dialog_button);

    await invoicePage.waitForElement(invoice.$adjust_markup_dialog_cancel_button);
    await invoicePage.clickButton(invoice.$adjust_markup_dialog_cancel_button);
    let isVisible_dialog = await invoicePage.elementIsVisible(invoice.$adjust_markup_dialog_cancel_button);
    await expect(isVisible_dialog).toEqual(false);
  });
});
