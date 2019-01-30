import Core from "../Core/Core";

const USERNAME = "#username";
const PASSWORD = "#password";
const LOGIN_BUTTON =
  "#area > div > div > form > table > tbody > tr:nth-child(5) > td > button";

class Login extends Core {
  constructor(username = "user27", password = "test123") {
    super();
    this.username = username;
    this.password = password;
  }

  signIn() {
    return new Promise(async (resolve, reject) => {
      try {
        await this.fillElementByCss(USERNAME, this.username);
        await this.fillElementByCss(PASSWORD, this.password);
        await this.clickButton(LOGIN_BUTTON).click();

        return resolve(true);
      } catch (e) {
        console.error("Can not login. " + e.message);
        return reject(false);
      }
    });
  }
}

export default Login;
