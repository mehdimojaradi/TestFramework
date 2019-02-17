import Helper from "../../../Core/Helper";
import requisition from "../Elements/Requisition";
import requisitionEdit from "../Elements/Requisition_Edit";

class RequisitionPage extends Helper {
  constructor() {
    super();
  }

  async findRequisitionBy(number) {
    try {
      await this.fillElementByCss(requisition.$id, number);
      await this.clickButton(requisition.$search_button);
      return true;
    } catch (e) {
      console.error(`Can not search. ${e}`);
      return false;
    }
  }

  async clickCreateRequisitionButton() {
    try {
      await this.clickButton(requisition.$create_requisition_button);
    } catch (e) {
      console.error(`Can not click "Create requisition" button. ${e}`);
    }
  }

  async openRequisition(number) {
    try {
      await this.findRequisitionBy(number);
      await this.clickButton(requisition.$number_link);
      return true;
    } catch (e) {
      console.error(`Can not search. ${e}`);
      return false;
    }
  }

  async clickEditButton(invoiceNo) {
    try {
      await this.openRequisition(invoiceNo);
      await this.clickButton(requisitionEdit.$edit_button);
      return true;
    } catch (e) {
      console.error(`Can not search. ${e}`);
      return false;
    }
  }

}

export default RequisitionPage;
