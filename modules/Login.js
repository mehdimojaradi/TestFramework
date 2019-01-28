import Core from "../tests/Core";

const USERNAME = "#username";
const PASSWORD = "#password";
const LOGIN_BUTTON =
  "#area > div > div > form > table > tbody > tr:nth-child(5) > td > button";
export default class Login extends Core {
  doLogin() {
    return new Promise(async (resolve, reject) => {
      try {
        await this.fillElementByCss(USERNAME, "user27");
        await this.fillElementByCss(PASSWORD, "test123");
        await this.clickButton(LOGIN_BUTTON).click();

        return resolve(true);
      } catch (e) {
        console.error("Can not login. " + e.message);
        return reject(false);
      }
    });
  }
}
