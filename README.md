

# Edvisor Smoke Test Suite

This project implements an automation test suite for the Edvisor platform, using Playwright and TypeScript. The tests are designed to validate critical business flows and ensure that core functionalities are working as expected.

## 🚀 Quick Start

### Prerequisites

- Node.js
- npm (usually comes with Node.js)
- TypeScript
- Playwright

### Installation

Clone the repository to your local machine using the following command:

```bash
git clone https://github.com/bmarlos10 edvisor-smoke-test-suite 
```
```bash
cd edvisor-smoke-test-suite
```

Install TypeScript globally (if not already installed):

```bash
npm install -g typescript
```

Install Playwright globally (if not already installed):

```bash
npm install -g playwright
```

Install the necessary dependencies:

```bash
npm install
```

## 📂 Project Structure and Test Cases

The test cases are located in the GitHub Wiki at the following [link](https://github.com/bmarlos10/edvisor-smoke-test-suite/wiki/Tests-Cases-%E2%80%90-Smoke-Test).

And also you can access the tests cases in the end of this document.

The project structure is mainly divided into two directories: `pageObjects` and `tests`.

### pageObjects

The Page Object pattern is a test design practice that promotes code reuse and simplifies test script maintenance. Each page is represented by a class that encapsulates the page elements and provides methods to interact with them.

You can find the following page objects in the `root > pageObjects` directory:

- AddressPage: Manages interaction with address forms.
- CompanyInfoPage: Handles filling out company information.
- HomePage: Provides methods for navigating the home page.
- LoginPage: Assists with login actions.
- SalesPage: Facilitates contacting the sales team.
- SignUpPage: Automates the account creation process.

### 🧪 Tests and Justifications

The automated tests reside in the `tests` directory. They were chosen based on their importance to the customer conversion process and user retention:

- createFreeDistributeAccount: Verifies the creation of a free account, a crucial step for potential customers to evaluate the platform.
- createTrialAccount: Tests the trial account creation, also vital for service evaluation.
- FreeAccountLogin: Confirms successful login for free accounts, ensuring user retention.
- talkToSales: Ensures users can contact the sales team, essential for sales success.

Ps: The createTrialAccount.spec test only goes up to the payment information, as the automatically generated card numbers are not compatible with the database to allow finalizing the account creation.

## 🧪 Running Tests

To execute a specific test, use the command `npx playwright test` followed by the path to the test file:

```bash
npx playwright test tests/createFreeDistributeAccount.spec.ts
npx playwright test tests/createTrialAccount.spec.ts
npx playwright test tests/FreeAccountLogin.spec.ts
npx playwright test tests/talkToSales.spec.ts
```

## 📊 HTML Report

After running the tests, you can view an automatically generated HTML report:

- Navigate to the `playwright-report` folder.
- Open the `index.html` file with your browser to view the report.

## 👀 Headful vs. Headless Mode

By default, the tests run in headful mode (visible browser). To switch to headless:

- Open the `playwright.config.ts` file.
- Find the line `use: { ...devices['Desktop Chrome'], headless: false }`.
- Change it to `headless: true`.

## 📈 Improvement Suggestions

- Implement persistence of the selected language to enhance the international user experience.


## 🧪 Tests Cases
| No. | Test Case                                                        | Justification                                                                                                                     | Severity |
|-----|------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------|----------|
| 1   | Create trial account                         | It's important to validate because it ensures that the system handles information correctly during the trial account creation process. | 1        |
| 2   | Validate translations                                            | It's important to validate as it ensures all translations in the system are accurate and consistent, providing a confusion-free user experience. | 2        |
| 3   | Validate contact with account manager | It's important to validate as it checks if the contact link with the account manager appropriately directs users, ensuring effective communication. | 1        |
| 4   | Validate creation of free account on Edvisor Distribute           | It's important to validate as it ensures the process of creating a free account is successfully completed, allowing access to basic resources. | 1        |
| 5   | Validate login to free account on Edvisor Distribute              | It's important to validate as it verifies if users can successfully log in to their free accounts, ensuring quick and secure access to resources. | 1        |
| 6   | Validate pricing page for subscription (monthly and annual) - Edvisor | It's important to validate as it confirms if the pricing page correctly displays subscription options, enabling users to make informed choices. | 2        |
| 7   | Validate pricing page for subscription (monthly and annual) - Edvisor Distribute | It's important to validate as it ensures the pricing page clearly displays subscription options for Edvisor Distribute, ensuring transparency. | 2        |
| 8   | Validate redirection of "List Your Programs" button              | It's important to validate as it checks if the button appropriately directs users, ensuring intuitive and uninterrupted navigation.         | 2        |
| 9   | Validate redirection of "Schedule Demo" button                   | It's important to validate as it ensures the button directs users to the demo scheduling page, facilitating access to information.          | 1        |
| 10  | Validate functionality of "Solutions" dropdown menu              | It's important to validate as it verifies if the dropdown menu presents all options correctly for easy access to solutions offered by the company. | 3        |
| 11  | Validate functionality of "Contact" dropdown menu                | It's important to validate as it ensures the dropdown menu presents relevant contact information for users to easily communicate.          | 1        |
| 12  | Validate functionality of "Resources" dropdown menu              | It's important to validate as it verifies if the dropdown menu displays a comprehensive and accessible list of available resources for users to explore. | 3        |

### Severity Legend:

- **Severity 1 (Critical):** These are critical defects that severely impact the system, making it dysfunctional or causing major failures. They require immediate attention because they directly affect essential system functions or user safety.

- **Severity 2 (Major/High):** These defects have a significant impact on the system, causing serious problems but not completely halting its operation. They may affect important features or cause considerable inconvenience to users. While not as urgent as critical issues, they are still important and should be addressed promptly.

- **Severity 3 (Minor/Low):** These defects have a minor impact on the system, resulting in minor issues or failures that don't significantly disrupt core functionality. They are less urgent and can be addressed in future software updates, as long as they don't interfere with the basic operation of the system.


Made by Bruno Marlos.


