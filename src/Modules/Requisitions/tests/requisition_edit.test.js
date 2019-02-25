import RequisitionEditPage from "../PageObjects/Requisition_Edit";
import requisitionEdit from "../Elements/Requisition_Edit";
import requisition from "../Elements/Requisition";

describe("Requisitions Edit", () => {
    let requisitionEditPage;
    const InvoiceNo = "REQ-22088";
    beforeAll(async () => {
        requisitionEditPage = new RequisitionEditPage();
        await requisitionEditPage.signIn(requisition.url);
    });

    afterAll(() => {
        requisitionEditPage.closeDriver();
    });

    beforeEach(async () => {
        requisitionEditPage.gotoPage(requisition.url);
    });

    it("should sign in", async () => {
        await requisitionEditPage.waitForElement(requisition.$title);
        const $el = await requisitionEditPage.getElementText(requisition.$title);
        await expect($el).toEqual("Requisitions");
        await expect(await requisitionEditPage.getBrowserUrl()).toContain(requisition.url);
    });

    it("Should close first dialog", async () => {
        await requisitionEditPage.openRequisition(InvoiceNo);
        await requisitionEditPage.clickButton(requisitionEdit.$close_button);
        const isHidden_Dialog = await requisitionEditPage.isElementHidden(requisitionEdit.$close_button);
        await expect(isHidden_Dialog).toBeTruthy();
    });

    it("Should view requisition in edit mode", async () => {
        await requisitionEditPage.clickEditButton(InvoiceNo);
        const $el = await requisitionEditPage.isElementDisplayed(requisitionEdit.$requisition_type_el);
        await expect($el).toBeTruthy();
    });

    it("Should click add bill of material", async () => {
        await requisitionEditPage.clickEditButton(InvoiceNo);
        await requisitionEditPage.clickButton(requisitionEdit.$add_bill_of_material_button);
        const $el = await requisitionEditPage.isElementDisplayed(requisitionEdit.$add_bom_dialog_title);
        await expect($el).toBeTruthy();
    });

    it("Should close add bill of material dialog", async () => {
        await requisitionEditPage.clickEditButton(InvoiceNo);
        await requisitionEditPage.clickButton(requisitionEdit.$add_bill_of_material_button);
        await requisitionEditPage.clickButton(requisitionEdit.$add_bom_dialog_close_button);
        const isHidden_Dialog = await requisitionEditPage.isElementHidden(requisitionEdit.$add_bom_dialog_close_button);
        await expect(isHidden_Dialog).toBeTruthy();
    });



})