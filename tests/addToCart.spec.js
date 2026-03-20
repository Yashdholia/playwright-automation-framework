import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { InventoryPage } from "../pages/InventoryPage";
import { users } from "../utils/testData";

test("Add to Cart Test", async ({ page }) => {
  const login = new LoginPage(page);
  const inventory = new InventoryPage(page);

  await login.goto();
  await login.login(users.standard.username, users.standard.password);

  await inventory.addItemToCart();
  await inventory.goToCart();

  await expect(page).toHaveURL(/cart/);
});
