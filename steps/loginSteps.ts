import { Page, expect } from '@playwright/test';
import { loginLocators } from '../pages/loginLocators';

export class LoginSteps {
  private page: Page;
  private locators: loginLocators;

  constructor(page: Page) {
    this.page = page;
    this.locators = new loginLocators(page);
  }

  async navigateToLogin(url: string) {
    await this.page.goto(url);
  }

  async enterCredentials(username: string, password: string) {
    await this.locators.username.fill(username);
    await this.locators.password.fill(password);
  }

  async clickLogin() {
    await this.locators.loginButton.click();
  }

  async performLogin(baseurl: string, username: string, password: string) {
    await this.navigateToLogin(baseurl);
    await this.enterCredentials(username, password);
    await this.clickLogin();
  }

  async verifySuccessfulLogin() {
    await expect(this.page).toHaveURL('https://www.saucedemo.com/inventory.html');
  }
}
