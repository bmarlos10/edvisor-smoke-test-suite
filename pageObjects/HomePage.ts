import { Page } from '@playwright/test';
import { URLs } from '../tests/utils/urls'; 

export class HomePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async goToSignUp() {
        await this.page.goto(URLs.HOME);
        await this.page.click(`a[href="${URLs.SIGNUP}"]`);
        await this.page.locator('text="Get Started"').first().click();
    }

    async navigateToHome() {
        await this.page.goto(URLs.HOME);
    }
}
