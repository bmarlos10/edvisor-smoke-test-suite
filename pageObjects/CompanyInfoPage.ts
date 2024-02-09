import { Page } from '@playwright/test';
import { testData } from '../tests/utils/TestData';

export class CompanyInfoPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async fillCompanyInfoForm() {
        await this.page.fill('input.sc-cmTdod.epCnIN', testData.companyName); 
        await this.page.fill('input.sc-lhVmIH.kzbtVD', testData.numberOfices); 
        await this.page.fill('input.input.sc-cmTdod.epCnIN[placeholder="Street name and number"]', testData.primaryOfficeAddress); 
        await this.page.fill('div:nth-child(4) > .form-group > .input', testData.city); 
        await this.page.fill('div:nth-child(5) > .form-group > .input', testData.state); 

        await this.page.locator('svg').click(); 
        await this.page.locator('#react-select-2-input').press('CapsLock');
        await this.page.locator('#react-select-2-input').fill(testData.country);
        await this.page.locator('#react-select-2-option-34').click(); 
        await this.page.getByRole('button', { name: 'Next' }).click();
    }

    async agreeToTerms() {
        
        await this.page.locator('label').filter({ hasText: 'I agree to Terms and' }).locator('rect').click();
        await this.page.locator('label').filter({ hasText: 'I agree to be solely' }).locator('rect').click();
   

        await this.page.getByRole('button', { name: 'Next' }).click();
    }
}
