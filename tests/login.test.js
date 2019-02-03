import EPFC from "../src/Core/epfc";
let SIGNIN = "alarms"
const epfc = new EPFC();

describe("Login", () => {
    beforeAll(() => {
        epfc.setTimeout(20);
    });

    afterAll(() => {
        epfc.closeDriver();
    });

    it("should be sign in", async () => {
        await epfc.signIn(SIGNIN);
        await epfc.setDelay(4);
        await expect(await epfc.getBrowserUrl()).toContain(SIGNIN);
    });
});