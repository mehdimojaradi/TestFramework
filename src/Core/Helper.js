import Core from ".";

//#region Login Property 
const USERNAME = "#username";
const PASSWORD = "#password";
const LOGIN_BUTTON =
    "#area > div > div > form > table > tbody > tr:nth-child(5) > td > button";

const USR = "user27";
const PASS = "test123";

const LOGIN_URL = "alarms";

//#endregion

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


}
export default Helper