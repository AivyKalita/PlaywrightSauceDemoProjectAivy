import {Page, Locator} from '@playwright/test';

export class shippingPage{
    classShipPage: Page;
    classTotalPrice: Locator;
    classFinishButton: Locator;

    constructor (consShippingPage: Page)
    {
        this.classShipPage = consShippingPage;
        this.classTotalPrice = consShippingPage.getByText(/Total: \$\d+\.\d{2}/);
        this.classFinishButton= consShippingPage.locator('[data-test="finish"]');
    }

}