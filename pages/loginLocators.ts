import {Page,Locator} from '@playwright/test';

export class loginLocators{
    page:Page;
    username:Locator;
    password:Locator;
    loginButton:Locator;

constructor (page:Page){

    this.page = page;
    this.username = page.locator('#user-name');
    this.password = page.locator('#password');
    this.loginButton = page.locator('#login-button');
}



}

