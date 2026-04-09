import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://ecommerce-playground.lambdatest.io/");
  await page.getByRole("button", { name: " My account" }).click();
  await page.getByRole("textbox", { name: "E-Mail Address" }).click();
  await page.getByRole("textbox", { name: "E-Mail Address" }).fill("Ramdas");
  await page.getByRole("textbox", { name: "Password" }).click();
  await page.getByRole("textbox", { name: "Password" }).fill("Ram@123");
  await page.getByRole("button", { name: "Login" }).click();
  await expect(page.getByText("Warning: No match for E-Mail")).toBeVisible();
});
