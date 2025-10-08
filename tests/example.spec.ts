import { test, expect } from '@playwright/test';

// ทดสอบหน้า homepage
test('homepage has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});

// ทดสอบการส่งฟอร์ม
test('form submission works', async ({ page }) => {
  await page.goto('https://example.com/form');
  await page.fill('#name', 'John Doe');
  await page.fill('#email', 'john@example.com');
  await page.click('button[type="submit"]');
  await expect(page.locator('.success-message')).toHaveText('Form submitted successfully!');
});