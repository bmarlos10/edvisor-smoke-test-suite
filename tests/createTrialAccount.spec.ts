import { test } from '@playwright/test';
import { HomePage } from '../pageObjects/HomePage';
import { SignUpPage } from '../pageObjects/SignUpPage';
import { CompanyInfoPage } from '../pageObjects/CompanyInfoPage';
import { testData } from './utils/TestData';
import { AddressPage } from '../pageObjects/AddressPage';

test.describe('Create trial account on Edvisor', () => {
  test('should navigate to the signup page and start the signup process', async ({ page }) => {
    const homePage = new HomePage(page);
    const signUpPage = new SignUpPage(page);
    const companyInfoPage = new CompanyInfoPage(page);

    await homePage.goToSignUp();

    await signUpPage.fillSignupForm();

    await companyInfoPage.fillCompanyInfoForm();

    await companyInfoPage.agreeToTerms();

    await page.locator('#card-element').getByRole('textbox').fill(testData.cardName);
    await page.waitForSelector('iframe[src*="stripe"]');
    const frames = await page.frames();
    for (const frame of frames) {
      try {
        const inputHandle = await frame.locator('input[placeholder="1234 1234 1234 1234"]');
        if (await inputHandle.count() > 0) {
          await inputHandle.fill(testData.cardNumber);
          break;
        }
      } catch (error) {

      }
    }

    await page.evaluate(() => window.scrollBy(0, 500));
    await page.waitForTimeout(1000);
    await page.waitForSelector('iframe[src*="stripe"]', { timeout: 10000 });
    const allFrames = await page.frames();
    let found = false;
    for (const frame of allFrames) {
      const inputHandle = await frame.$('input[autocomplete="cc-exp"]');
      if (inputHandle) {
        await frame.fill('input[autocomplete="cc-exp"]', testData.expiryDate);
        found = true;
        break;
      }
    }

    if (!found) {
      console.error('Expiry date input not found.');
    }

    await page.waitForSelector('iframe[src*="stripe"]');
    const cvcFrames = await page.frames();
    let cvcFilled = false;
    for (const frame of cvcFrames) {
      try {
        const cvcInputHandle = await frame.$('input[autocomplete="cc-csc"]');
        if (cvcInputHandle) {
          await frame.fill('input[autocomplete="cc-csc"]', testData.cardCvc);
          cvcFilled = true;
          break;
        }
      } catch (error) {
        console.error('Error trying to fill the CVC field:', error);
      }
    }

    if (!cvcFilled) {
      console.error('CVC input not found.');
    }

    const addressPage = new AddressPage(page);

    await addressPage.fillAddressForm();

    await addressPage.submitForm();

  });
});


