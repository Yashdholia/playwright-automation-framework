//import { test, expect } from "@playwright/test";
const { test, expect } = require("@playwright/test");
//import { LoginPage } from "../pages/LoginPage";
const { LoginPage } = require("../pages/LoginPage");
import { users } from "../utils/testData";

test("Login Test", async ({ page }) => {
  const login = new LoginPage(page);

  await login.goto();
  await login.login(users.standard.username, users.standard.password);

  await expect(page).toHaveURL(/inventory/);
});
