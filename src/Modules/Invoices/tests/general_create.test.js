import GeneralCreatePage from "../PageObjects/GeneralCreate";
import generalCreate from "../Elements/GeneralCreate";
import invoice from "../Elements/Invoice";

describe("Create General Invoice", ()=>{
let generalCratePage;

beforeAll(async()=>{
    generalCratePage = new GeneralCreatePage();
    await generalCratePage.signIn(invoice.url);
});

afterAll(async()=>{
    // generalCratePage.closeDriver();
});

beforeEach(async()=>{
    await generalCratePage.gotoPage(invoice.url);
});

it("should sign in", async () => {
    await generalCratePage.waitForElement(invoice.$title);
    const $el = await generalCratePage.getElementText(invoice.$title);
    await expect($el).toEqual("Invoices");
    await expect(await generalCratePage.getBrowserUrl()).toContain(invoice.url);
});

it("Should close dialog", async ()=>{
    await generalCratePage.clickCreateInvoiceButton();
    await generalCratePage.waitForElement(generalCreate.$close_button);
    await generalCratePage.clickButton(generalCreate.$close_button);
});

it.only("Should save general invoice", async ()=>{
    await generalCratePage.clickCreateInvoiceButton();
    await generalCratePage.waitForElement(generalCreate.$ivoice_Type_el);
    await generalCratePage.getSelectedValue(generalCreate.$ivoice_Type_el,"2");
    await generalCratePage.getSelectedValue(generalCreate.$client_el,"43");
    await generalCratePage.setDelay(3000);
    await generalCratePage.waitForElement(generalCreate.$project_el);
    await generalCratePage.getSelectedValue(generalCreate.$project_el,"3524");
    await generalCratePage.fillElementByCss(generalCreate.$description_el, "Description");
    await generalCratePage.getSelectedValue(generalCreate.$jurisdiction_el,"1");
    await generalCratePage.setDelay(1000);
    // await generalCratePage.getSelectedValue(generalCreate.$tax_Code_el,"1");
    // await generalCratePage.clickButton(generalCreate.$save_button);
});

});