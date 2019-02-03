import epfc from "../Core/epfc";

export default class invoices extends epfc{
    constructor(){
        super();
    }

    async search(invoiceNO){
        try{
            await this.fillElementByCss('#invoice_number_id', invoiceNO);
            await this.clickButton('#ui-tabs-1 > div > fieldset > form > div > input[type="submit"]:nth-child(2)');
            return true;
        }catch(e){
            console.error(`Can not search. ${e}`);
            return false;
        }
    }
}