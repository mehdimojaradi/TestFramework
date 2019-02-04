import Core from ".";

const USERNAME = "#username",
      PASSWORD = "#password",
      LOGIN_BUTTON =
        "#area > div > div > form > table > tbody > tr:nth-child(5) > td > button",
      USR = "user27",
      PASS = "test123",
      LOGIN_URL = "alarms";

class Helper extends Core {
  constructor() {
    super();
  }

  async signIn(url = LOGIN_URL, username = USR, password = PASS) {
    try {
      await this.gotoPage(url);
      await this.fillElementByCss(USERNAME, username);
      await this.fillElementByCss(PASSWORD, password);
      await this.clickButton(LOGIN_BUTTON);
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
