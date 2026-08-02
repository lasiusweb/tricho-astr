import { test, expect } from '@playwright/test';

test('home page has expected title or brand text', async ({ page }) => {
  await page.goto('/');
  // Adjust the title/check to match the site's actual title if needed
  await expect(page).toHaveTitle(/Vandhara|Vandhara Agrotech/i);
});
