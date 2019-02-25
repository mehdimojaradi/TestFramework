import PurchaseOrderPage from "../PageObjects";
import purchaseOrder from "../Elements/PurchaseOrders";

describe("Purchase Orders", () => {
  let purchaseOrderPage;

  beforeAll(async () => {
    purchaseOrderPage = new PurchaseOrderPage();
    await purchaseOrderPage.signIn(purchaseOrder.url);
  });

  afterAll(() => {
    purchaseOrderPage.closeDriver();
  });

  beforeEach(async () => {
    await purchaseOrderPage.gotoPage(purchaseOrder.url);
  });

  it("should find po number", async () => {
    let id = '55782';
    await purchaseOrderPage.findPurchaseOrderBy(id);

    await purchaseOrderPage.waitForElement(purchaseOrder.$number_link);
    await purchaseOrderPage.clickButton(purchaseOrder.$number_link);
  });

  it.only("Should fill project chosen", async () => {
    await purchaseOrderPage.selectFromChosen(purchaseOrder.$project_chosen, 'CPC-111');
    await purchaseOrderPage.selectFromChosen(purchaseOrder.$project_chosen, 'AGP-110');
  })
});
