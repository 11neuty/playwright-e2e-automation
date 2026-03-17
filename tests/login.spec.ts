import { test } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { allure } from 'allure-playwright';

test.describe('Login Feature', () => {

  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);

    await allure.step('Open login page', async () => {
      await loginPage.goto();
    });
  });

  test('TC001 - Login with valid credentials', async () => {
    allure.owner('Ryan');
    allure.severity('critical');
    allure.tag('login');

    await allure.step('Enter valid username and valid password', async () => {
      await loginPage.login('standard_user', 'secret_sauce');
    });

    await allure.step('Verify user is redirected to inventory page', async () => {
      await loginPage.verifyLoginSuccess();
    });
  });

  test('TC002 - Login with invalid username', async () => {
    allure.owner('Ryan');
    allure.severity('critical');
    allure.tag('login');

    await allure.step('Enter invalid username and valid password', async () => {
      await loginPage.login('invalid_user', 'secret_sauce');
    });

    await allure.step('Verify error message is displayed', async () => {
      await loginPage.verifyLoginFailed();
    });
  });

  test('TC003 - Login with invalid password', async () => {
    allure.owner('Ryan');
    allure.severity('critical');
    allure.tag('login');

    await allure.step('Enter valid username and invalid password', async () => {
      await loginPage.login('standard_user', 'invalid_password');
    });

    await allure.step('Verify error message is displayed', async () => {
      await loginPage.verifyLoginFailed();
    });
  });

});