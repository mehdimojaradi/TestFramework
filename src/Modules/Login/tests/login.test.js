import Helper from "../../../Core/Helper";
import login from "../../../Core/login";

describe("Login", () => {
  let helper;

  beforeAll(() => {
    helper = new Helper();
  });

  afterAll(() => {
    helper.closeDriver();
  });

  it("should be sign in", async () => {
    await helper.signIn();
    await helper.waitForElement(login.$default_page_title);
    await expect(await helper.getBrowserUrl()).toContain(login.default_url);
  });
});
