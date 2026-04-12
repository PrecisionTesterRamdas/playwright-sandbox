import { expect, test, Browser } from "@playwright/test";

test("Lambda test registration flow", async ({ page }) => {
  const webUrl: string = "https://ecommerce-playground.lambdatest.io/";

  await page.goto(webUrl);
  await page.getByRole("button", { name: " My account" }).hover();
  await page.getByRole("link", { name: " Register" }).click();
  await page.locator("#input-firstname").fill("Ramdas");
  await page.locator("#input-lastname").fill("Tejam");
  await page.locator("#input-email").fill("tester-ram@qa.com");
  await page.locator("#input-telephone").fill("911232344345");
  await page.locator("#input-password").fill("qaram@2026");
  await page.locator("#input-confirm").fill("qaram@2026");
  await page.getByText("No", { exact: true }).click();
  await page.getByText("I have read and agree to the ").click();
  await page.getByRole("button", { name: "Continue" }).click();
});
