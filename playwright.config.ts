import { defineConfig, devices } from '@playwright/test';


export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  // Mantém 1 worker para execução sequencial em desenvolvimento
  workers: process.env.CI ? 1 : 1,
  reporter: 'html',
  use: {
    headless: false,
    trace: 'on-first-retry',
  },

  // Configura apenas o projeto Chromium para execução
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'], headless: false }, // Executa testes visivelmente no Chromium
    },
    // Removidos Firefox e WebKit para limitar a execução ao Chromium
  ],

  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
