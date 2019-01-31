import Login from "../src/Modules/Login";

describe("Login", () => {
  beforeAll(() => {
    const login = new Login();
    await login.signIn();
    login.gotoPage("invoices");
  });

  it("should detect label of INVOICES",async () => {
    const $el = await login.getElementText("#area .content h1");
    console.log($el); 
  });
});
