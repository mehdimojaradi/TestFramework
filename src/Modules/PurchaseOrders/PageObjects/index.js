import Helper from "../../../Core/Helper";
import purchaseOrder from "../Elements/PurchaseOrders";

class PurchaseOrderPage extends Helper {
    constructor() {
        super();
    }

    async findPurchaseOrderBy(number) {
        try {
          await this.waitForElement(purchaseOrder.$id);
          await this.fillElementByCss(purchaseOrder.$id, number);
          await this.clickButton(purchaseOrder.$search_button);
          return true;
        } catch (e) {
          console.error(`Can not search. ${e}`);
          return false;
        }
      }
}

export default PurchaseOrderPage;