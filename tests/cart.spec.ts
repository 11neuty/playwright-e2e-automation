import { test } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { InventoryPage } from '../pages/inventory.page';
import { CartPage } from '../pages/cart.page';
import { allure } from 'allure-playwright';

test.describe('Cart & Checkout Feature', () => {

  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
  });

  test('TC008 - User can add product to cart', async ({ page }) => {
    const inventory = new InventoryPage(page);
    const cart = new CartPage(page);

    await allure.step('Add product to cart', async () => {
      await inventory.addProductByName('Sauce Labs Backpack');
    });

    await allure.step('Open cart page', async () => {
      await inventory.openCart();
    });

    await allure.step('Verify product is in cart', async () => {
      await cart.verifyItemVisible();
    });
  });

  test('TC009 - User can remove product from inventory page', async ({ page }) => {
    const inventory = new InventoryPage(page);

    await allure.step('Add product to cart', async () => {
      await inventory.addProductByName('Sauce Labs Backpack');
    });

    await allure.step('Remove product from inventory page', async () => {
      await inventory.removeProductByName('Sauce Labs Backpack');
    });
  });

  test('TC010 - User can remove product from cart page', async ({ page }) => {
    const inventory = new InventoryPage(page);
    const cart = new CartPage(page);

    await inventory.addProductByName('Sauce Labs Backpack');
    await inventory.openCart();

    await allure.step('Remove product from cart page', async () => {
      await cart.removeItem();
    });

    await allure.step('Verify cart is empty', async () => {
      await cart.verifyItemNotVisible();
    });
  });

  test('TC011 - User can checkout item', async ({ page }) => {
    const inventory = new InventoryPage(page);
    const cart = new CartPage(page);

    await inventory.addProductByName('Sauce Labs Backpack');
    await inventory.openCart();

    await allure.step('Click checkout button', async () => {
      await cart.clickCheckout();
    });

    await allure.step('Fill customer information', async () => {
      await cart.fillCustomerInfo('Ryan', 'QA', '12345');
    });

    await allure.step('Click continue', async () => {
      await cart.clickContinue();
    });

    await allure.step('Verify checkout overview page', async () => {
      await cart.verifyCheckoutOverviewPage();
    });

    await allure.step('Click finish', async () => {
      await cart.clickFinish();
    });

    await allure.step('Verify order success', async () => {
      await cart.verifyOrderSuccess();
    });
  });

});