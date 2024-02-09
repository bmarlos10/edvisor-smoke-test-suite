import { Page, expect } from '@playwright/test';
import { testData } from '../tests/utils/TestData';

export class SignUpPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async fillSignupForm() {
        await this.page.fill('input.sc-cmTdod.epCnIN', testData.firstName); 
        await this.page.fill('input.input.sc-cmTdod.epCnIN', testData.lastName); 
        await this.page.fill('div.col-12.mb-3 input.input.sc-cmTdod.epCnIN', testData.position); 
        await this.page.fill('input.input.form-control[type="tel"]', testData.regionCode); 
        await this.page.fill('div.col-8.mb-3.col-md-9 input.input.sc-cmTdod.epCnIN', testData.phone); 
        await this.page.fill('//div[contains(text(),"Your Email Address")]/following-sibling::input', testData.email);
        await this.page.fill('(//input[@type="password"])[1]', testData.password);
        await this.page.fill('(//input[@type="password"])[2]', testData.password);
        await this.page.click('button.sc-gisBJw.bBUfYk');

        await this.page.waitForSelector('p.pb-md-4.sc-iAyFgw.gHbIqA:text("Company Information")');
    }

    async fillFreeDistributeAccountForm(){
        await this.page.locator('#hs_cos_wrapper_Header').getByRole('link', { name: 'Sign Up' }).click();
        await this.page.getByRole('link', { name: 'Get Started' }).nth(1).click();
        await this.page.fill('.sc-cmTdod',testData.firstName);
        await this.page.fill('div:nth-child(2) > .form-group > .sc-cmTdod',testData.lastName);
        await this.page.fill('div:nth-child(3) > .form-group > .sc-cmTdod',testData.email);
        await this.page.locator('div:nth-child(3) > .form-group > .sc-cmTdod').press('Tab');
        await this.page.fill('.col-6 > .form-group > .sc-cmTdod',testData.phone);
        await this.page.locator('.col-6 > .form-group > .sc-cmTdod').first().press('Tab');
        await this.page.fill('div:nth-child(5) > .form-group > .sc-cmTdod',testData.firstName);
        await this.page.locator('div:nth-child(6) > .form-group > .sc-cmTdod').click();
        await this.page.locator('div:nth-child(6) > .form-group > .sc-cmTdod').fill('School Of Tests');
        await this.page.locator('input[type="password"]').first().click();
        await this.page.locator('input[type="password"]').first().fill('IamaTest2024@');
        await this.page.locator('input[type="password"]').first().press('Tab');
        await this.page.locator('input[type="password"]').nth(1).fill('IamaTest2024@');
        await this.page.locator('rect').click();
        await this.page.getByRole('button', { name: 'Sign up' }).click();
    }
}
