import { Page, expect } from '@playwright/test';

export class CartPage {
  constructor(private page: Page) {}

  async removeItem() {
    await this.page.getByRole('button', { name: 'Remove' }).click();
  }

  async clickCheckout() {
    await this.page.getByRole('button', { name: 'Checkout' }).click();
  }

  async verifyItemVisible() {
    await expect(this.page.locator('.cart_item')).toBeVisible();
  }

  async verifyItemNotVisible() {
    await expect(this.page.locator('.cart_item')).toHaveCount(0);
  }

  // ======================
  // CHECKOUT FLOW
  // ======================

  async fillCustomerInfo(firstName: string, lastName: string, zip: string) {
    await this.page.getByPlaceholder('First Name').fill(firstName);
    await this.page.getByPlaceholder('Last Name').fill(lastName);
    await this.page.getByPlaceholder('Zip/Postal Code').fill(zip);
  }

  async clickContinue() {
    await this.page.getByRole('button', { name: 'Continue' }).click();
  }

  async clickFinish() {
    await this.page.getByRole('button', { name: 'Finish' }).click();
  }

  async verifyCheckoutOverviewPage() {
    await expect(this.page.getByText('Checkout: Overview')).toBeVisible();
  }

  async verifyOrderSuccess() {
    await expect(this.page.getByText('Thank you for your order!')).toBeVisible();
  }
}