import GeneralCreatePage from "../PageObjects/GeneralCreate";
import generalCreate from "../Elements/GeneralCreate";
import invoice from "../Elements/Invoice";

describe("Create General Invoice", () => {
    let generalCratePage;

    beforeAll(async () => {
        generalCratePage = new GeneralCreatePage();
        await generalCratePage.signIn(invoice.url);
    });

    afterAll(async () => {
        generalCratePage.closeDriver();
    });

    beforeEach(async () => {
        await generalCratePage.gotoPage(invoice.url);
    });

    it("should sign in", async () => {
        const $el = await generalCratePage.getElementText(invoice.$title);
        await expect($el).toEqual("Invoices");
        await expect(await generalCratePage.getBrowserUrl()).toContain(invoice.url);
    });

    it("Should close dialog", async () => {
        await generalCratePage.clickCreateInvoiceButton();
        await generalCratePage.clickButton(generalCreate.$close_button);
    });

    it("Should save general invoice", async () => {
        await generalCratePage.clickCreateInvoiceButton();
        generalCratePage.selectFromDropdown(generalCreate.$ivoice_Type_el, "2");
        generalCratePage.selectFromDropdown(generalCreate.$client_el, "43");
        await generalCratePage.setDelay(3000);
        generalCratePage.selectFromDropdown(generalCreate.$project_el, "3524");
        await generalCratePage.fillElementByCss(generalCreate.$description_el, "Description");
        generalCratePage.selectFromDropdown(generalCreate.$jurisdiction_el, "1");
        await generalCratePage.setDelay(3000);
        generalCratePage.selectFromDropdown(generalCreate.$tax_Code_el, "1");
        await generalCratePage.clickButton(generalCreate.$save_button);
    });

});