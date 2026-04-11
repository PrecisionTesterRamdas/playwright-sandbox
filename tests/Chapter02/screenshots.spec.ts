// Import playwright module

import { test, expect } from "@playwright/test";

// Write a test

test("Capture screenshots", async ({ page }) => {
  // Go to the URL
  await page.goto("https://ecommerce-playground.lambdatest.io/");

  // element screenshot
  await page
    .locator("#entry_218379")
    .screenshot({ path: "./screenshots/ElementScreenshot.png" });

  // page screenshot
  await page.screenshot({ path: "./screenshots/PageScreenshot.png" });

  // full page screenshot
  await page.screenshot({
    path: "./screenshots/FullPageScreenshot.png",
    fullPage: true,
  });
});
