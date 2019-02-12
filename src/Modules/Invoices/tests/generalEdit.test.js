import GeneralEditPage from "../PageObjects/GeneralEdit";
import invoice from "../Elements/Invoice";
import generalEdit from "../Elements/GeneralEdit";

describe("Edit general like invoice", () => {
    let generalEditPage;
    const invoiceNo = '11438';

    beforeAll(async () => {
        generalEditPage = new GeneralEditPage();
        await generalEditPage.signIn(invoice.url);
    });

    afterAll(() => {
        generalEditPage.closeDriver();
    });

    beforeEach(async () => {
        await generalEditPage.gotoPage(invoice.url);
    });

    it("should sign in", async () => {
        await generalEditPage.waitForElement(invoice.$title);
        const $el = await generalEditPage.getElementText(invoice.$title);
        await expect($el).toEqual("Invoices");
        await expect(await generalEditPage.getBrowserUrl()).toContain(invoice.url);
    });

    it("should add general invoice item", async () => {
        await generalEditPage.openInvoice(invoiceNo);

        await generalEditPage.waitForElement(generalEdit.$add_item_dialog_button);
        await generalEditPage.clickButton(generalEdit.$add_item_dialog_button);

        await generalEditPage.waitForElement(generalEdit.$add_invoice_item_itemname);
        await generalEditPage.fillElementByCss(generalEdit.$add_invoice_item_itemname, 'item 2');
        await generalEditPage.fillElementByCss(generalEdit.$add_invoice_item_itemdescriotion, 'description');
        await generalEditPage.fillElementByCss(generalEdit.$add_invoice_item_price, '100');
        await generalEditPage.fillElementByCss(generalEdit.$add_invoice_item_qty, '3');

        await generalEditPage.waitForElement(generalEdit.$edit_item_dialog_save_button);
        await generalEditPage.clickButton(generalEdit.$edit_item_dialog_save_button);
        const isVisible_dialog = await generalEditPage.IsDisplayed(generalEdit.$edit_item_dialog);
        await expect(isVisible_dialog).toBeFalsy();
    });

    it("should close add item dialog general invoice", async () => {
        await generalEditPage.openInvoice(invoiceNo);

        await generalEditPage.waitForElement(generalEdit.$add_item_dialog_button);
        await generalEditPage.clickButton(generalEdit.$add_item_dialog_button);

        await generalEditPage.waitForElement(generalEdit.$add_item_dialog_close_button);
        await generalEditPage.clickButton(generalEdit.$add_item_dialog_close_button);
        const isVisible_dialog = await generalEditPage.IsDisplayed(generalEdit.$add_item_dialog_close_button);
        await expect(isVisible_dialog).toBeFalsy();
    });

    it("should edit general invoice item", async () => {
        await generalEditPage.openInvoice(invoiceNo);

        await generalEditPage.waitForElement(generalEdit.$edit_item_dialog_button);
        await generalEditPage.clickButton(generalEdit.$edit_item_dialog_button);
        await generalEditPage.waitForElement(generalEdit.$edit_item_dialog_save_button);
        await generalEditPage.clickButton(generalEdit.$edit_item_dialog_save_button);
        const isVisible_dialog = await generalEditPage.IsDisplayed(generalEdit.$edit_item_dialog_save_button);
        await expect(isVisible_dialog).toBeFalsy();
    });

    it("should add adjust markup general invoice item", async () => {
        await generalEditPage.openInvoice(invoiceNo);

        await generalEditPage.waitForElement(generalEdit.$adjust_markup_dialog_button);
        await generalEditPage.clickButton(generalEdit.$adjust_markup_dialog_button);

        await generalEditPage.waitForElement(generalEdit.$adjust_markup_dialog_percentage);
        await generalEditPage.fillElementByCss(generalEdit.$adjust_markup_dialog_percentage, '15');

        await generalEditPage.waitForElement(generalEdit.$adjust_markup_dialog_ok_button);
        await generalEditPage.clickButton(generalEdit.$adjust_markup_dialog_ok_button);
        const isVisible_dialog = await generalEditPage.IsDisplayed(generalEdit.$adjust_markup_dialog_ok_button);
        await expect(isVisible_dialog).toBeFalsy();
    });

    it("should cancel adjust markup general invoice item", async () => {
        await generalEditPage.openInvoice(invoiceNo);

        await generalEditPage.waitForElement(generalEdit.$adjust_markup_dialog_button);
        await generalEditPage.clickButton(generalEdit.$adjust_markup_dialog_button);

        await generalEditPage.waitForElement(generalEdit.$adjust_markup_dialog_cancel_button);
        await generalEditPage.clickButton(generalEdit.$adjust_markup_dialog_cancel_button);
        const isVisible_dialog = await generalEditPage.IsDisplayed(generalEdit.$adjust_markup_dialog_cancel_button);
        await expect(isVisible_dialog).toBeFalsy();
    });

    it("should delete general invoice item", async () => {
        await generalEditPage.openInvoice(invoiceNo);
        await generalEditPage.waitForElement(generalEdit.$delete_item_dialog_button);
        await generalEditPage.clickButton(generalEdit.$delete_item_dialog_button);
    });

    it("should toggle item description general invoice", async () => {
        await generalEditPage.openInvoice(invoiceNo);
        await generalEditPage.waitForElement(generalEdit.$toggle_item_description_button);
        await generalEditPage.clickButton(generalEdit.$toggle_item_description_button);
        let hasclass = await generalEditPage.hasClass(generalEdit.$toggle_item_description_button_clicked);
        await expect(hasclass).toBeTruthy();
        await generalEditPage.clickButton(generalEdit.$toggle_item_description_button);
        hasclass = await generalEditPage.hasClass(generalEdit.$toggle_item_description_button_clicked);
        await expect(hasclass).toBeFalsy();
    });

    it("should save general invoice", async () => {
        await generalEditPage.openInvoice(invoiceNo);
        await generalEditPage.waitForElement(generalEdit.$csave_invoice);
        await generalEditPage.clickButton(generalEdit.$csave_invoice);
        const isVisible_dialog = await generalEditPage.IsDisplayed(generalEdit.$csave_invoice);
        await expect(isVisible_dialog).toBeFalsy();
    });

    it("should close general invoice", async () => {
        await generalEditPage.openInvoice(invoiceNo);
        await generalEditPage.waitForElement(generalEdit.$close_invoice);
        await generalEditPage.clickButton(generalEdit.$close_invoice);
        const isVisible_dialog = await generalEditPage.IsDisplayed(generalEdit.$close_invoice);
        await expect(isVisible_dialog).toBeFalsy();
    });
});
