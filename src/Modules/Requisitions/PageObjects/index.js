import Helper from "../../../Core/Helper";
import requisition from "../Elements/Requisition";

class RequisitionPage extends Helper {
  constructor() {
    super();
  }

  async findRequisitionBy(number) {
    try {
      await this.waitForElement(requisition.$id);
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
      await this.waitForElement(requisition.$create_requisition_button);
      await this.clickButton(requisition.$create_requisition_button);
    } catch (e) {
      console.error(`Can not click "Create requisition" button. ${e}`);
    }
  }

  async openRequisition(number) {
    try {
      await this.findRequisitionBy(number);
      await this.waitForElement(requisition.$number_link);
      await this.clickButton(requisition.$number_link);
      return true;
    } catch (e) {
      console.error(`Can not search. ${e}`);
      return false;
    }
  }

}

export default RequisitionPage;
