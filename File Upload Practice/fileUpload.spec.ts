import { expect, Locator, test } from "@playwright/test";
import path from "path";

const testURL: string =
  "file:///C:/Projects/playwright-sandbox/File%20Upload%20Practice/demo-upload.html";

test("single file upload", async ({ page }) => {
  await page.goto(testURL);
  await page.waitForTimeout(3000);
  await page
    .locator("#singleFile")
    .setInputFiles(
      path.join(
        "C:/Projects/playwright-sandbox/File Upload Practice/Sample files",
        "file1.txt.txt",
      ),
    );

  await page.waitForTimeout(2000);
  await expect(page.getByText("Status: Selected")).toBeVisible();
});

test("multiple files upload", async ({ page }) => {
  await page.goto(testURL);
  await page
    .locator("#multiFiles")
    .setInputFiles([
      path.join(
        "C:/Projects/playwright-sandbox/File Upload Practice/Sample files",
        "file1.txt.txt",
      ),
      path.join(
        "C:/Projects/playwright-sandbox/File Upload Practice/Sample files",
        "file2.txt.txt",
      ),
      path.join(
        "C:/Projects/playwright-sandbox/File Upload Practice/Sample files",
        "file3.txt.txt",
      ),
    ]);

  await expect(page.locator("#multi-status")).toHaveText(
    "Status: Selected -> file1.txt.txt, file2.txt.txt, file3.txt.txt",
  );

  await page.waitForTimeout(5000);

  // Remove all selected files
  await page.locator("#multiFiles").setInputFiles([]);

  await page.waitForTimeout(3000);
});

test("buffer file upload - file on the go", async ({ page }) => {
  await page.goto(testURL);
  await page.getByTestId("buffer-file-input").setInputFiles({
    name: "file4.txt",
    mimeType: "text/plain",
    buffer: Buffer.from("this is a test file 4, created by Ramdas."),
  });

  await page.waitForTimeout(5000);
});
