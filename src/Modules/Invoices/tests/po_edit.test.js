import POEditPage from "../PageObjects/POEdit";
import invoice from "../Elements/Invoice";
import poEdit from "../Elements/POEdit";

describe("PO edit invoice", () => {
    let poEditPage;
    const invoiceNo = '11347';

    beforeAll(async () => {
        poEditPage = new POEditPage();
        await poEditPage.signIn(invoice.url);
    });

    afterAll(() => {
        poEditPage.closeDriver();
    });

    beforeEach(async () => {
        await poEditPage.gotoPage(invoice.url);
    });

    it("should signin", async () => {
        
    });
});