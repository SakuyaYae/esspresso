import { Given, When, Then } from '@cucumber/cucumber';
import { By, until, Key } from 'selenium-webdriver';
import { expect } from "chai";

Given('press the enter The cafe Button', async function () {
  const cafeBtn = await this.driver.findElements(By.xpath("//*[contains(text(),'Enter the cafe')]"));
  await cafeBtn[0].click();
});
When('I press Wait', async function () {
  const waitBtn = await this.driver.findElements(By.xpath("//*[contains(text(),'Wait')]"));
  await waitBtn[0].click();
});