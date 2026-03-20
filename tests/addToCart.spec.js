const { test, expect } = require("@playwright/test");
const { LoginPage } = require("../pages/LoginPage");
const { InventoryPage } = require("../pages/InventoryPage");
const { users } = require("../utils/testData");

test("Add to Cart Test", async ({ page }) => {
  const login = new LoginPage(page);
  const inventory = new InventoryPage(page);

  await login.goto();
  await login.login(users.standard.username, users.standard.password);

  await inventory.addItemToCart();
  await inventory.goToCart();

  await expect(page).toHaveURL(/cart/);
});
