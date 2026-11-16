import {Page, Locator} from '@playwright/test';

export class AddressPage{
    classPage: Page;
    firstName: Locator;
    lastName: Locator;
    zipCode: Locator;
    continueButton: Locator;

constructor(consPage:Page){
  this.classPage = consPage;
  this.firstName = consPage.getByPlaceholder('First Name');
  this.lastName = consPage.getByPlaceholder('Last Name');
  this.zipCode = consPage.locator('#postal-code');
  this.continueButton = consPage.locator('#continue');
}};