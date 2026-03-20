const { test, expect } = require("@playwright/test");
const { LoginPage } = require("../pages/LoginPage");
const { InventoryPage } = require("../pages/InventoryPage");
const { CheckoutPage } = require("../pages/CheckoutPage");
const { users } = require("../utils/testData");

test("Checkout Test", async ({ page }) => {
  const login = new LoginPage(page);
  const inventory = new InventoryPage(page);
  const checkout = new CheckoutPage(page);

  await login.goto();
  await login.login(users.standard.username, users.standard.password);

  await inventory.addItemToCart();
  await inventory.goToCart();

  await checkout.checkoutProcess();

  await expect(page.locator(".complete-header")).toHaveText(
    "Thank you for your order!",
  );
});
