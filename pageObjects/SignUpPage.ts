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
}
