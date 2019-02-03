import Core from "../Core/Core";

//#region Login Property 
const USERNAME = "#username";
const PASSWORD = "#password";
const LOGIN_BUTTON =
  "#area > div > div > form > table > tbody > tr:nth-child(5) > td > button";

const usr = "user27";
const pass = "test123";

const loginUrl = "alarms";

//#endregion

export default class epfc extends Core {
    constructor() {
        super();
    }
    
    async signIn(url = loginUrl, username = usr, password = pass) {
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