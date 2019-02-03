import Login from "../src/Modules/Login";

describe("Login", () => {
  const login = new Login();

  beforeAll(() => {
    jest.setTimeout(20000);
  });
  
  it("should detect label of INVOICES", async () => {
    await login.gotoPage("alarms");
    await login.signIn();
    await login.gotoPage("invoices");
    await login.getTimeout(10000);
    const $el = await login.getElementText("#area > div > h1");
    console.log($el);
  });

});