

import { Page } from '@playwright/test';

export class LoginPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async performLogin(email: string, password: string) {
        await this.page.getByRole('link', { name: 'Log in' }).click();
        await this.page.getByRole('link', { name: 'Log in' }).nth(2).click();
        await this.page.getByPlaceholder('Email Address').click();
        await this.page.getByPlaceholder('Email Address').fill(email);
        await this.page.getByPlaceholder('Password').click();
        await this.page.getByPlaceholder('Password').fill(password);
        await this.page.getByRole('button', { name: 'Login' }).click();
    }

    async validateLoginSuccess() {
        await this.page.locator('school-dashboard-layout').getByText('Dashboard', { exact: true }).click();
    }
}
