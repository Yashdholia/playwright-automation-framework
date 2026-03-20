export class InventoryPage {
  constructor(page) {
    this.page = page;
    this.addToCartBtn = ".btn_inventory";
    this.cartIcon = ".shopping_cart_link";
  }

  async addItemToCart() {
    await this.page.click(this.addToCartBtn);
  }

  async goToCart() {
    await this.page.click(this.cartIcon);
  }
}
