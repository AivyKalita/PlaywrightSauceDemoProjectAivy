import {Page, expect} from '@playwright/test';
import { shippingPage } from '../pages/shippingPages';

export class shippingSteps{
    classShippingSteps: Page;
    classTotalpriceSteps: shippingPage;
    classFinishButtonSteps: shippingPage;

    constructor (consShippingSteps: Page){

        this.classShippingSteps = consShippingSteps;
        this.classTotalpriceSteps = new shippingPage(consShippingSteps);
        this.classFinishButtonSteps = new shippingPage(consShippingSteps);

    }

   async checkTotalPrice(){
    await expect(this.classTotalpriceSteps.classTotalPrice).toContainText('43.18');
   
        console.log('Total price is correct!');
    
   }

   async clickOnFinishSteps(){
    await this.classFinishButtonSteps.classFinishButton.click();
   }

}