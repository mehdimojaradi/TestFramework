import Helper from "../src/Core/Helper";

//#region Login Property 
const SIGNIN = "alarms"
let helper = new Helper();
const PAGE_TITLE = "#area > div > h1";
//#endregion

describe("Login", () => {
    beforeAll(() => {});

    afterAll(() => {
        helper.closeDriver();
    });

    it("should be sign in", async () => {
        await helper.signIn(SIGNIN);
        await helper.waitForElement(PAGE_TITLE);
        await expect(await helper.getBrowserUrl()).toContain(SIGNIN);
    });
});