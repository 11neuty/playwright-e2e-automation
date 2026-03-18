import { test } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { InventoryPage } from '../pages/inventory.page';
import { allure } from 'allure-playwright';

test.describe('Sort Feature', () => {

  let loginPage: LoginPage;
  let inventoryPage: InventoryPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    inventoryPage = new InventoryPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
  });

  test('TC004 - Sort product by Name A-Z', async () => {
    allure.tag('sort');

    await allure.step('Select sort Name A-Z', async () => {
      await inventoryPage.selectSort('az');
    });

    await allure.step('Verify products sorted A-Z', async () => {
      await inventoryPage.verifySortedAZ();
    });
  });

  test('TC005 - Sort product by Name Z-A', async () => {
    allure.tag('sort');

    await allure.step('Select sort Name Z-A', async () => {
      await inventoryPage.selectSort('za');
    });

    await allure.step('Verify products sorted Z-A', async () => {
      await inventoryPage.verifySortedZA();
    });
  });

  test('TC006 - Sort product by Price Low-High', async () => {
    allure.tag('sort');

    await allure.step('Select sort Price Low-High', async () => {
      await inventoryPage.selectSort('lohi');
    });

    await allure.step('Verify products sorted Low-High', async () => {
      await inventoryPage.verifyPriceLowHigh();
    });
  });

  test('TC007 - Sort product by Price High-Low', async () => {
    allure.tag('sort');

    await allure.step('Select sort Price High-Low', async () => {
      await inventoryPage.selectSort('hilo');
    });

    await allure.step('Verify products sorted High-Low', async () => {
      await inventoryPage.verifyPriceHighLow();
    });
  });

});