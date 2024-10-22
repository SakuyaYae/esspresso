import { Given, When, Then } from '@cucumber/cucumber';
import { By, until, Key } from 'selenium-webdriver';
import { expect } from "chai";


Then('my bag shoud be visible above the image', async function () {
  const bagElem = await this.driver.findElements(By.xpath("//*[contains(text(),'bag')]"));
  expect(bagElem).to.exist
});