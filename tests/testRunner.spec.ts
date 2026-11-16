import { test } from '@playwright/test';
//import * as dotenv from 'dotenv';
//import * as path from 'path';
import { LoginSteps } from '../steps/loginSteps';
import {selectProductSteps} from '../steps/selectProductSteps';
import { environment } from '../playwright.config';
import {checkOutSteps} from '../steps/checkOutSteps';
import {AddressStep} from '../steps/addressSteps';
import {shippingSteps} from '../steps/shippingSteps';
import { finishSteps } from '../steps/finishSteps';

// Load environment variables from .env file
//const envPath = path.resolve(__dirname, '../.env');
//console.log('Looking for .env at:', envPath);

// debug: true will print the exact reason in the terminal if .env fails to load
//const result = dotenv.config({ path: envPath, debug: true });
//console.log('Dotenv loaded variables:', result.parsed);
//const env = (process.env.ENV || 'QA').toUpperCase();

const baseUrl = process.env[`${environment}_BASE_URL`] || 'https://saucedemo.com';
const username = process.env[`${environment}_USERNAME`] || '';
const password = process.env[`${environment}_PASSWORD`] || '';

test.describe(`SauceDemo Suite [${environment}]`, () => {
   test.beforeEach(async ({ page }) => {
    const loginSteps = new LoginSteps(page);
    await loginSteps.performLogin(baseUrl, username, password);
    
  });
  test('should log in successfully with standard user', async ({ page }) => {
    const loginSteps = new LoginSteps(page);
    await loginSteps.verifySuccessfulLogin();
  });

  test('should select and add products to the cart', async ({ page }) => {
    const SelectProductSteps = new selectProductSteps(page);
    await SelectProductSteps.selectAndAddProduct();
    await SelectProductSteps.countProductinCart(); 
});
  
  test('should click on CheckOut Button', async ({ page }) => {
    const SelectProductSteps1 = new selectProductSteps(page);
    await SelectProductSteps1.selectAndAddProduct();
    const CheckoutPage = new checkOutSteps(page);
    await CheckoutPage.clickingOnCheckOutButton();
    await CheckoutPage.verifyAddressPage(); 

  });

  test('should fill Address details and proceed to checkout overview page', async ({page})=>{

    const SelectProductSteps1 = new selectProductSteps(page);
    await SelectProductSteps1.selectAndAddProduct();
    const CheckoutPage = new checkOutSteps(page);
    await CheckoutPage.clickingOnCheckOutButton();
    await CheckoutPage.verifyAddressPage(); 
    const fillAddDetails = new AddressStep(page);
    await fillAddDetails.fillAddressDetails();
    await fillAddDetails.clickOnContinue();
    await fillAddDetails.verifyCheckOutOverview();
    
});

test ('ShippingDetails', async ({page})=>{

    const SelectProductSteps1 = new selectProductSteps(page);
    await SelectProductSteps1.selectAndAddProduct();
    const CheckoutPage = new checkOutSteps(page);
    await CheckoutPage.clickingOnCheckOutButton();
    await CheckoutPage.verifyAddressPage(); 
    const fillAddDetails = new AddressStep(page);
    await fillAddDetails.fillAddressDetails();
    await fillAddDetails.clickOnContinue();
    await fillAddDetails.verifyCheckOutOverview();
    const shipping = new shippingSteps(page);
    await shipping.checkTotalPrice();
    await shipping.clickOnFinishSteps();
});
   
test ('Till Finish Page', async ({page})=>{

    const SelectProductSteps1 = new selectProductSteps(page);
    await SelectProductSteps1.selectAndAddProduct();
    const CheckoutPage = new checkOutSteps(page);
    await CheckoutPage.clickingOnCheckOutButton();
    await CheckoutPage.verifyAddressPage(); 
    const fillAddDetails = new AddressStep(page);
    await fillAddDetails.fillAddressDetails();
    await fillAddDetails.clickOnContinue();
    await fillAddDetails.verifyCheckOutOverview();
    const shipping = new shippingSteps(page);
    await shipping.checkTotalPrice();
    await shipping.clickOnFinishSteps();
    const finish = new finishSteps(page);
    await finish.compareURL();
    await finish.compareMessage();
});
   
    //
  });



