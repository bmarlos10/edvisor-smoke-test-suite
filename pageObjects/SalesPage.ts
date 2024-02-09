import { Page, expect } from '@playwright/test';

export class SalesPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigateToSales() {
        await this.page.locator('#hs_cos_wrapper_Header').getByRole('link', { name: 'Talk to Sales' }).click();
    }

    async interactWithContactCardsAndValidate() {
        for (let i = 1; i <= 6; i++) {
            await this.page.locator(`.edvisor-secondary-nav-btn`).nth(i - 1).click();

            await expect(this.page.locator('img#logo-landmark-booking-container')).toBeVisible();

            await this.page.goto('https://www.edvisor.io/demo');
        }
    }
}
