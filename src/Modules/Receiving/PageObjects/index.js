import Helper from "../../../Core/Helper";
import receiving from "../Elements/Receiving";

class ReceivingPage extends Helper {
  constructor() {
    super();
  }

  async findReceivingBy(number) {
    try {
      await this.waitForElement(receiving.$id);
      await this.fillElementByCss(receiving.$id, number);
      await this.clickButton(receiving.$search_button);
      return true;
    } catch (e) {
      console.error(`Can not search. ${e}`);
      return false;
    }
  }
}

export default ReceivingPage;
