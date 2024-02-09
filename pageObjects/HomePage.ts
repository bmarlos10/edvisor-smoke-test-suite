import { Page } from '@playwright/test';
import { URLs } from '../tests/utils/urls'; // Certifique-se de que este caminho está correto

export class HomePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // Método para navegar até a página inicial e então para a página de inscrição
    async goToSignUp() {
        await this.page.goto(URLs.HOME); // Navega até a página inicial
        await this.page.click(`a[href="${URLs.SIGNUP}"]`); // Clica no link de inscrição
        await this.page.locator('text="Get Started"').first().click(); // Assume que há um botão ou link "Get Started" para iniciar o processo de inscrição
    }
}
