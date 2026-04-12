import { test, expect } from "@playwright/test";

test("Login test - wrong email", async ({ page }) => {
  const webUrl: string = "https://ecommerce-playground.lambdatest.io/";
  await page.goto(webUrl);
  await page.getByRole("button", { name: " My account" }).hover();
  await page.getByRole("link", { name: " Login" }).click();
  await page
    .getByRole("textbox", { name: "E-Mail Address" })
    .fill("teste-ram@qa.com");
  await page.getByRole("textbox", { name: "Password" }).fill("qaram@2026");
  await page.getByRole("button", { name: "Login" }).click();
  await expect(page.getByText(" Warning: No match for E-Mail")).toBeVisible();
});

test("Login test - wrong password", async ({ page }) => {
  const webUrl: string = "https://ecommerce-playground.lambdatest.io/";
  await page.goto(webUrl);
  await page.getByRole("button", { name: " My account" }).hover();
  await page.getByRole("link", { name: " Login" }).click();
  await page
    .getByRole("textbox", { name: "E-Mail Address" })
    .fill("tester-ram@qa.com");
  await page.getByRole("textbox", { name: "Password" }).fill("qaram@20");
  await page.getByRole("button", { name: "Login" }).click();
  await expect(page.getByText(" Warning: No match for E-Mail")).toBeVisible();
});
