export class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.checkoutBtn = "#checkout";
    this.firstName = "#first-name";
    this.lastName = "#last-name";
    this.postalCode = "#postal-code";
    this.continueBtn = "#continue";
    this.finishBtn = "#finish";
    this.successMsg = ".complete-header";
  }

  async checkoutProcess() {
    await this.page.click(this.checkoutBtn);
    await this.page.fill(this.firstName, "Yash");
    await this.page.fill(this.lastName, "Test");
    await this.page.fill(this.postalCode, "110001");
    await this.page.click(this.continueBtn);
    await this.page.click(this.finishBtn);
  }
}
