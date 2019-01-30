import Login from "../src/Modules/Login";

describe("Login", () => {
  beforeAll(() => {
    const login = new Login();
    login.signIn();
    login.redirect("invoices");
  });

  it("should login the form", () => {});
});
