import RequisitionEditPage from "../PageObjects/Requisition_Edit";
import requisitionEdit from "../Elements/Requisition_Edit";
import requisition from "../Elements/Requisition";

describe("Requisitions Edit", ()=>{
    let requisitionEditPage;
    const InvoiceNo = "REQ-22088";
    beforeAll(async ()=>{
        requisitionEditPage = new RequisitionEditPage();
        await requisitionEditPage.signIn(requisition.url);
    });

    afterAll(()=>{
        requisitionEditPage.closeDriver();
    });

    beforeEach(async ()=>{
        requisitionEditPage.gotoPage(requisition.url);
    });

    it("should sign in", async () => {
        await requisitionEditPage.waitForElement(requisition.$title);
        const $el = await requisitionEditPage.getElementText(requisition.$title);
        await expect($el).toEqual("Requisitions");
        await expect(await requisitionEditPage.getBrowserUrl()).toContain(requisition.url);
      });

      it("Should close dialog", async ()=>{        
        await requisitionEditPage.openRequisition(InvoiceNo);
        await requisitionEditPage.waitForElement(requisitionEdit.$close_button);
        await requisitionEditPage.clickButton(requisitionEdit.$close_button);
        const isVisible_Dialog = await requisitionEditPage.IsDisplayed(requisitionEdit.$close_button);
        await expect(isVisible_Dialog).toBeFalsy();
      });

})