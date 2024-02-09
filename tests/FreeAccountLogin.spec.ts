
import { test } from '@playwright/test';
import { LoginPage } from '../pageObjects/LoginPage'
import { HomePage } from '../pageObjects/HomePage';

test.describe('Free Account Login', () => {
    test('should login successfully and reach the dashboard', async ({ page }) => {
        const homePage = new HomePage(page);
        await homePage.navigateToHome();
        const loginPage = new LoginPage(page);

        const email = 'testedivisor@gmail.com';
        const password = 'IamaTest2024@';

        await loginPage.performLogin(email, password);
        await loginPage.validateLoginSuccess();

    });
});
