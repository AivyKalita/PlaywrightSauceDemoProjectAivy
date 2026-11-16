import {Page, Locator} from '@playwright/test';
import { Url } from 'node:url';

export class finishPage{
    classfinishPage: Page;
    classfinishMessagePage: Locator;


    constructor (consFinishPage:Page){
        this.classfinishPage= consFinishPage;
        this.classfinishMessagePage = consFinishPage.getByText('Thank you for your order!');
    }



}