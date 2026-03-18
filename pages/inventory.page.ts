import { Page, expect } from '@playwright/test';

export class InventoryPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // ======================
  // ACTIONS
  // ======================

  async selectSort(option: string) {
    await this.page.locator('[data-test="product-sort-container"]').selectOption(option);
  }

  async addProductByName(productName: string) {
    const product = this.page.locator('.inventory_item', {
      has: this.page.getByText(productName)
    });
    await product.getByRole('button', { name: 'Add to cart' }).click();
  }

  async removeProductByName(productName: string) {
    const product = this.page.locator('.inventory_item', {
      has: this.page.getByText(productName)
    });
    await product.getByRole('button', { name: 'Remove' }).click();
  }

  async openCart() {
    await this.page.locator('.shopping_cart_link').click();
  }

  // ======================
  // GETTERS
  // ======================

  async getProductNames() {
    return await this.page.locator('.inventory_item_name').allTextContents();
  }

  async getProductPrices() {
    const prices = await this.page.locator('.inventory_item_price').allTextContents();
    return prices.map(p => parseFloat(p.replace('$', '')));
  }

  // ======================
  // VALIDATIONS
  // ======================

  async verifySortedAZ() {
    const names = await this.getProductNames();
    const sorted = [...names].sort();
    expect(names).toEqual(sorted);
  }

  async verifySortedZA() {
    const names = await this.getProductNames();
    const sorted = [...names].sort().reverse();
    expect(names).toEqual(sorted);
  }

  async verifyPriceLowHigh() {
    const prices = await this.getProductPrices();
    const sorted = [...prices].sort((a, b) => a - b);
    expect(prices).toEqual(sorted);
  }

  async verifyPriceHighLow() {
    const prices = await this.getProductPrices();
    const sorted = [...prices].sort((a, b) => b - a);
    expect(prices).toEqual(sorted);
  }

  async verifyInventoryPageLoaded() {
    await expect(this.page.getByText('Products')).toBeVisible();
  }
}