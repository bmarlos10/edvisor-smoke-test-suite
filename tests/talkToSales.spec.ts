import { test } from '@playwright/test';
import { HomePage } from '../pageObjects/HomePage';
import { SalesPage } from '../pageObjects/SalesPage';

test.describe('Talk to Sales Interaction', () => {
  test('should navigate to the homepage and then interact with each contact card', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.navigateToHome();

    const salesPage = new SalesPage(page);
    await salesPage.navigateToSales();
    await salesPage.interactWithContactCardsAndValidate();

  });
});
