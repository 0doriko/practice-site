// @ts-check
import { test, expect } from '@playwright/test';

// Test 1: Check the page loads and has correct title
test('has title', async ({ page }) => {
  await page.goto('https://0doriko.github.io/practice-site');
  
  await expect(page).toHaveTitle('Nami\'s Practice Site');
});

// Test 2: Check the status element exists and says correct message
test('status message is correct', async ({ page }) => {
  await page.goto('https://0doriko.github.io/practice-site');
  
  const status = await page.locator('#status');
  await expect(status).toBeVisible();
  await expect(status).toHaveText('All systems go.');
});