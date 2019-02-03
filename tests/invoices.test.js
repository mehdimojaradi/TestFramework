import Invoices from "../src/Modules/invoices"
let INVOICES = "invoices"
const invoices = new Invoices();

describe ("Invoices" , () => {
    beforeAll(()=>{
        invoices.setTimeout(30);
    });

    it("Should be sign in", async () => {
        await invoices.signIn(INVOICES); 
        await invoices.setDelay(8);
        await expect(await invoices.getBrowserUrl()).toContain(INVOICES);      
        const $el = await invoices.getElementText("#area > div > h1");
        await expect($el).toEqual("Invoices");
    });

    it("Should be search", async () => {
        let INVOICENO = '11410';
        await invoices.search(INVOICENO);
        await invoices.setDelay(4);
        const $el = await invoices.getElementText("#invoice-list-tables > div:nth-child(2) > table > tbody:nth-child(2) > tr > td:nth-child(1) > a");
        console.log($el);
        await expect($el.trim()).toEqual(INVOICENO);
    });
})