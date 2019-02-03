import Login from "../src/Modules/Login";

describe("", () => {
  const login = new Login();

  beforeAll(() => {
    
  });
  
  it("", async () => {
    await login.gotoPage("alarms");
    await login.signIn();
    await login.gotoPage("invoices");
    await login.waitUntil("#area");
  });

});