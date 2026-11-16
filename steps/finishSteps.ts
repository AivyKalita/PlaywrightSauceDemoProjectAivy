import {Page, expect} from '@playwright/test';
import { finishPage } from '../pages/finishPages';

export class finishSteps{
    classFinishStepsPage: Page;
    classFinishStepMessage: finishPage;

constructor (consFinishStepsPage: Page)

{
    this.classFinishStepsPage = consFinishStepsPage;
    this.classFinishStepMessage = new finishPage (consFinishStepsPage);
}

async compareURL(){
 if(this.classFinishStepsPage.url()==='https://www.saucedemo.com/checkout-complete.html')
 {
    console.log('Reached Finish Page!');
 }
 else
 {
    console.log('Not reached Finish Page');
 }
}

async compareMessage()
 {
    const messageText: string = await this.classFinishStepMessage.classfinishMessagePage.textContent() ?? '';
    


}

}