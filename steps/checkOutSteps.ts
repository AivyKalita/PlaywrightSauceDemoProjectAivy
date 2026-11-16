import {Page, expect} from '@playwright/test';
import {checkOut} from '../pages/checkOutPages';

export class checkOutSteps{
    classCheckOutPage: Page;
    classclickCheckOutButton: checkOut;

    constructor (consCheckOutPage:Page){
        this.classCheckOutPage = consCheckOutPage;
        this.classclickCheckOutButton = new checkOut(consCheckOutPage);
    }

async clickingOnCheckOutButton(){
    await this.classclickCheckOutButton.classcheckOutButton.click();
}

async verifyAddressPage(){
    if (this.classCheckOutPage.url()===('https://www.saucedemo.com/checkout-step-one.html'))
    {console.log("Checked Out and reached Address page!");}
    else
    {console.log("Not on the Address page.");}
    
    

}
}