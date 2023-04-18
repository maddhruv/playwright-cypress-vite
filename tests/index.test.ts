import { test, expect } from "@playwright/test";

test("test whole content", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle("Vite + React + TS");
  await page.getByRole("heading", { name: "Vite + React" }).click();
  await page.getByRole("button", { name: "count is 0" }).click();
  expect(page.getByRole("button", { name: "count is 1" })).toBeTruthy();
  await page.getByRole("link", { name: "Vite logo" }).click();
  await page.getByRole("link", { name: "React logo" }).click();
});
