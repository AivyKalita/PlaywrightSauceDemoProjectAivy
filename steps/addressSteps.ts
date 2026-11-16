import {Page, expect} from '@playwright/test';
import {AddressPage} from '../pages/addressPages.ts';

export class AddressStep{
    classAddressPage: Page;
    classLocatorFN: AddressPage;
    classLocatorLN: AddressPage;
    classLocatorZip: AddressPage;
    classLocatorContinue: AddressPage;
    

constructor (conspage:Page){
    this.classAddressPage = conspage;
    this.classLocatorFN = new AddressPage(conspage);
    this.classLocatorLN = new AddressPage(conspage);
    this.classLocatorZip = new AddressPage(conspage);
    this.classLocatorContinue = new AddressPage(conspage);
}

async fillAddressDetails(){
    await this.classLocatorFN.firstName.fill('Zubi');   
    await this.classLocatorLN.lastName.fill('Dubi');
    await this.classLocatorZip.zipCode.fill('781028');

}

async clickOnContinue(){
    await this.classLocatorContinue.continueButton.click();
}

async verifyCheckOutOverview(){
    const expectedUrl:string = 'https://www.saucedemo.com/checkout-step-two.html';
    if (this.classAddressPage.url()===expectedUrl){
        console.log('On the Checkout overview page');
    }
    else {
        console.log('Not on Checkout overview page');
    }
}
};