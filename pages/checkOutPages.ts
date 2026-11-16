import {Page, Locator} from '@playwright/test';

export class checkOut{
    classpage:Page;
    classcheckOutButton:Locator;

    constructor(conspage:Page){
        this.classpage = conspage;
        this.classcheckOutButton = conspage.locator('#checkout');
    }

}