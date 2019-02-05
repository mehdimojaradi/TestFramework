import Core from ".";
import helper from "./helper.json";

class Helper extends Core {
  constructor() {
    super();
  }

  async signIn(url=helper.login_url, username=helper.usr, password=helper.pwd) {
    try {
      await this.gotoPage(url);
      await this.fillElementByCss(helper.$username, username);
      await this.fillElementByCss(helper.$password, password);
      await this.clickButton(helper.$login_button);
      return true;
    } catch (e) {
      console.error(`Can not login. ${e.message}`);
      return false;
    }
  }

  getDataProvider() {
    return this.constructor.name.toLowerCase() + ".json";
  }
}
export default Helper;
