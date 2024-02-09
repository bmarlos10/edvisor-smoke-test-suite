
import { test } from '@playwright/test';
import { SignUpPage } from '../pageObjects/SignUpPage';
import { HomePage } from '../pageObjects/HomePage';

test.describe('Create Free Distribute Account', () => {
    test('should successfully create a free distribute account', async ({ page }) => {
        const homePage = new HomePage(page);
        await homePage.navigateToHome();
        const signUpPage = new SignUpPage(page);
        await signUpPage.fillFreeDistributeAccountForm();

    });
});
