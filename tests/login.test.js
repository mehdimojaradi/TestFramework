import EPFC from "../src/Core/epfc";
let SIGNIN = "alerts"
const epfc = new EPFC();

describe("Login", () => {
    beforeAll(() => {
    jest.setTimeout(20000);
    });

    it("should detect label of INVOICES", async () => {        
        await epfc.signIn(SIGNIN);
        await invoices.setDelay(4);
        await expect(await invoices.getBrowserUrl()).toContain(SIGNIN);
    });
});