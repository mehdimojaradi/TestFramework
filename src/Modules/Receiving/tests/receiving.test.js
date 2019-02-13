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
    const pageTitle = await receivingPage.getElementText(receiving.$title)
    expect(pageTitle.trim()).toEqual("Purchase Order Receiving");
  });
});
