import Core from ".";
import login from "./login";

class Helper extends Core {
  constructor() {
    super();
  }

  async signIn(url=login.default_url, username=login.usr, password=login.pwd) {
    try {
      await this.gotoPage(url);
      await this.fillElementByCss(login.$username, username);
      await this.fillElementByCss(login.$password, password);
      await this.clickButton(login.$login_button);
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
