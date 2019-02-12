import PurchaseOrdersPage from "../PageObjects";
import purchaseOrders from "../Elements/PurchaseOrders";

describe("Purchase Orders", () => {
    let purchaseOrdersPage;
  
    beforeAll(async () => {
      purchaseOrdersPage = new PurchaseOrdersPage();
      await purchaseOrdersPage.signIn(purchaseOrders.url);
    });
  
    afterAll(() => {
      purchaseOrdersPage.closeDriver();
    });
  
    beforeEach(async () => {
      await purchaseOrdersPage.gotoPage(purchaseOrders.url);
    });

    it("", () => {

    });
});
  