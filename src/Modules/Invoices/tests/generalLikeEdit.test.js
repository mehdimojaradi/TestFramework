import GeneralLikeEditPage from "../PageObjects/generalLikeEdit";
import invoice from "../Elements/invoice";
import generalLikeEdit from "../Elements/generalLikeEdit";

describe("Edit general like invoice", () => {
    let generalLikeEditPage;
    const invoiceNo = '11438';

    beforeAll(async () => {
        generalLikeEditPage = new GeneralLikeEditPage();
        await generalLikeEditPage.signIn(invoice.url);
    });

    afterAll(() => {
        generalLikeEditPage.closeDriver();
    });

    beforeEach(async () => {
        await generalLikeEditPage.gotoPage(invoice.url);
    });

    it("should sign in", async () => {
        await generalLikeEditPage.waitForElement(invoice.$title);
        const $el = await generalLikeEditPage.getElementText(invoice.$title);
        await expect($el).toEqual("Invoices");
        await expect(await generalLikeEditPage.getBrowserUrl()).toContain(invoice.url);
    });

    it("should add general invoice item", async () => {
        await generalLikeEditPage.openInvoice(invoiceNo);

        await generalLikeEditPage.waitForElement(generalLikeEdit.$add_item_dialog_button);
        await generalLikeEditPage.clickButton(generalLikeEdit.$add_item_dialog_button);

        await generalLikeEditPage.waitForElement(generalLikeEdit.$add_invoice_item_itemname);
        await generalLikeEditPage.fillElementByCss(generalLikeEdit.$add_invoice_item_itemname, 'item 2');
        await generalLikeEditPage.fillElementByCss(generalLikeEdit.$add_invoice_item_itemdescriotion, 'description');
        await generalLikeEditPage.fillElementByCss(generalLikeEdit.$add_invoice_item_price, '100');
        await generalLikeEditPage.fillElementByCss(generalLikeEdit.$add_invoice_item_qty, '3');

        await generalLikeEditPage.waitForElement(generalLikeEdit.$edit_item_dialog_save_button);
        await generalLikeEditPage.clickButton(generalLikeEdit.$edit_item_dialog_save_button);
        const isVisible_dialog = await generalLikeEditPage.elementIsDisplayed(generalLikeEdit.$edit_item_dialog);
        await expect(isVisible_dialog).toBeFalsy();
    });

    it("should close add item dialog general invoice", async () => {
        await generalLikeEditPage.openInvoice(invoiceNo);

        await generalLikeEditPage.waitForElement(generalLikeEdit.$add_item_dialog_button);
        await generalLikeEditPage.clickButton(generalLikeEdit.$add_item_dialog_button);

        await generalLikeEditPage.waitForElement(generalLikeEdit.$add_item_dialog_close_button);
        await generalLikeEditPage.clickButton(generalLikeEdit.$add_item_dialog_close_button);
        const isVisible_dialog = await generalLikeEditPage.elementIsDisplayed(generalLikeEdit.$add_item_dialog_close_button);
        await expect(isVisible_dialog).toBeFalsy();
    });

    it("should edit general invoice item", async () => {
        await generalLikeEditPage.openInvoice(invoiceNo);

        await generalLikeEditPage.waitForElement(generalLikeEdit.$edit_item_dialog_button);
        await generalLikeEditPage.clickButton(generalLikeEdit.$edit_item_dialog_button);
        await generalLikeEditPage.waitForElement(generalLikeEdit.$edit_item_dialog_save_button);
        await generalLikeEditPage.clickButton(generalLikeEdit.$edit_item_dialog_save_button);
        const isVisible_dialog = await generalLikeEditPage.elementIsDisplayed(generalLikeEdit.$edit_item_dialog_save_button);
        await expect(isVisible_dialog).toBeFalsy();
    });

    it("should add adjust markup general invoice item", async () => {
        await generalLikeEditPage.openInvoice(invoiceNo);

        await generalLikeEditPage.waitForElement(generalLikeEdit.$adjust_markup_dialog_button);
        await generalLikeEditPage.clickButton(generalLikeEdit.$adjust_markup_dialog_button);

        await generalLikeEditPage.waitForElement(generalLikeEdit.$adjust_markup_dialog_percentage);
        await generalLikeEditPage.fillElementByCss(generalLikeEdit.$adjust_markup_dialog_percentage, '15');

        await generalLikeEditPage.waitForElement(generalLikeEdit.$adjust_markup_dialog_ok_button);
        await generalLikeEditPage.clickButton(generalLikeEdit.$adjust_markup_dialog_ok_button);
        const isVisible_dialog = await generalLikeEditPage.elementIsDisplayed(generalLikeEdit.$adjust_markup_dialog_ok_button);
        await expect(isVisible_dialog).toBeFalsy();
    });

    it("should cancel adjust markup general invoice item", async () => {
        await generalLikeEditPage.openInvoice(invoiceNo);

        await generalLikeEditPage.waitForElement(generalLikeEdit.$adjust_markup_dialog_button);
        await generalLikeEditPage.clickButton(generalLikeEdit.$adjust_markup_dialog_button);

        await generalLikeEditPage.waitForElement(generalLikeEdit.$adjust_markup_dialog_cancel_button);
        await generalLikeEditPage.clickButton(generalLikeEdit.$adjust_markup_dialog_cancel_button);
        const isVisible_dialog = await generalLikeEditPage.elementIsDisplayed(generalLikeEdit.$adjust_markup_dialog_cancel_button);
        await expect(isVisible_dialog).toBeFalsy();
    });
});
