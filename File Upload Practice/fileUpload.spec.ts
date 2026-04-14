import { expect, test } from "@playwright/test";
import path from "path";

test("single file upload", async ({ page }) => {
  const testURL =
    "file:///C:/Projects/playwright-sandbox/File%20Upload%20Practice/demo-upload.html";
  page.goto(testURL);
  page
    .locator("#singleFile")
    .setInputFiles(
      path.join(
        "C:\Projects\playwright-sandbox\File Upload Practice\Sample files",
        "file1.txt",
      ),
    );
});
