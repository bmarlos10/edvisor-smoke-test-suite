import { Page } from '@playwright/test';
import { testData } from '../tests/utils/TestData';

export class AddressPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async fillAddressForm() {
        await this.page.getByPlaceholder('Street name, number and unit/').click();
        await this.page.getByPlaceholder('Street name, number and unit/').fill('1808 St Clair');
        await this.page.locator('div:nth-child(5) > .sc-cmTdod').click();
        await this.page.locator('div:nth-child(5) > .sc-cmTdod').press('CapsLock');
        await this.page.locator('div:nth-child(5) > .sc-cmTdod').fill('M6N0C1');
        await this.page.locator('div:nth-child(6) > .sc-cmTdod').click();
        await this.page.locator('div:nth-child(6) > .sc-cmTdod').fill('Toronto');
        await this.page.locator('div').filter({ hasText: /^State\/Province\/TerritoryCountry$/ }).getByRole('textbox').first().click();
        await this.page.locator('div').filter({ hasText: /^State\/Province\/TerritoryCountry$/ }).getByRole('textbox').first().press('CapsLock');
        await this.page.locator('div').filter({ hasText: /^State\/Province\/TerritoryCountry$/ }).getByRole('textbox').first().fill('Ontario');
        await this.page.locator('svg').click();
        await this.page.locator('#react-select-3-input').press('CapsLock');
        await this.page.locator('#react-select-3-input').fill(testData.country);
        await this.page.locator('#react-select-3-option-34').click();

    }

    async submitForm() {
        await this.page.getByRole('button', { name: 'Submit' }).click();
    }
}
