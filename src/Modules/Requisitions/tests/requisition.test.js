import RequisitionPage from "../PageObjects";
import requisition from "../Elements/Requisition";

describe("Requisition", () => {
  let requisitionPage;

  beforeAll(async () => {
    requisitionPage = new RequisitionPage();
    await requisitionPage.signIn(requisition.url);
  });

  afterAll(() => {
    requisitionPage.closeDriver();
  });

  beforeEach(async () => {
    await requisitionPage.gotoPage(requisition.url);
  });

  it("should sign in", async () => {
    await requisitionPage.waitForElement(requisition.$title);
    const $el = await requisitionPage.getElementText(requisition.$title);
    await expect($el).toEqual("Requisitions");
    await expect(await requisitionPage.getBrowserUrl()).toContain(requisition.url);
  });

  it("should find requisition", async () => {
    let id = "REQ-22088";
    await requisitionPage.findRequisitionBy(id);
    await requisitionPage.waitForElement(requisition.$number_link);
    const $el = await requisitionPage.getElementText(requisition.$number_link);
    await expect($el.trim()).toEqual(id);
  });

});
