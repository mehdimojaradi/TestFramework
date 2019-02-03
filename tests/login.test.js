import Login from "../src/Modules/Login";

describe("", () => {
  const login = new Login();

  beforeAll(() => {
    jest.setTimeout(20000);
  });
  
  it("", async () => {
    await login.gotoPage("alarms");
    await login.signIn();
    await login.gotoPage("invoices");
    await login.waitUntilElementIsVisible("#area");
    console.log(await login.getElementText('#area > div > h1'));
  });

});