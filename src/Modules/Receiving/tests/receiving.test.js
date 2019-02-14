import ReceivingPage from "../PageObjects";
import receiving from "../Elements/Receiving";

describe("Receiving", () => {
  let receivingPage;

  beforeAll(async () => {
    receivingPage = new ReceivingPage();
    await receivingPage.signIn(receiving.url);
  });

  afterAll(() => {
    receivingPage.closeDriver();
  });

  beforeEach(async () => {
    await receivingPage.gotoPage(receiving.url);
  });

  it("should display the receiving page title", async () => {
    const pageTitle = await receivingPage.getElementText(receiving.$title);
    expect(pageTitle.trim()).toEqual("Purchase Order Receiving");
  });

  it("should display the receiving dialog title", async () => {
    const id = "5469";
    const expectedDialogTitle = "PO Note";
    await receivingPage.waitForElement(receiving.$po_number_input);
    await receivingPage.fillElementByCss(receiving.$po_number_input, id);
    await receivingPage.pressEnter(receiving.$po_number_input);
    await receivingPage.waitForElement(receiving.$po_note_label);
    const receivingDialogTitle = await receivingPage.getElementText(
      receiving.$po_note_label
    );
    await expect(receivingDialogTitle).toEqual(expectedDialogTitle);
  });

  it("should check receiving PO from All tab", async () => {
    await receivingPage.clickButton(receiving.$all_tab);
    await receivingPage.waitForElement(receiving.$first_receiving_item_link);
    const expectedReceivingItemId = await receivingPage.getElementText(
      receiving.$first_receiving_item_link
    );
    await receivingPage.clickButton(receiving.$first_receiving_item_link);
    await receivingPage.waitForElement(
      receiving.$po_id_on_receive_lines_for_po_dialog
    );
    const receivingPurchaseOrderId = await receivingPage.getElementText(
      receiving.$po_id_on_receive_lines_for_po_dialog
    );
    expect(`PO-${receivingPurchaseOrderId}`).toEqual(expectedReceivingItemId);
  });
});
