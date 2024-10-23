import { Given, When, Then } from '@cucumber/cucumber';
import { By, until, Key } from 'selenium-webdriver';
import { expect } from "chai";

Given('press the enter The cafe Button', async function () {
  const cafeBtn = await this.driver.findElements(By.xpath("//*[contains(text(),'Enter the cafe')]"));
  await cafeBtn[0].click();
});

Given('i have clicked on go west', async function () {
  const westBtn = await this.driver.findElements(By.xpath("//*[contains(text(),'Go west')]"));
  await westBtn[0].click();
});

Given('i have clicked on go east', async function () {
  const eastBtn = await this.driver.findElements(By.xpath("//*[contains(text(),'Go east')]"));
  await eastBtn[0].click();
});

When('I press Wait', async function () {
  const waitBtn = await this.driver.findElements(By.xpath("//*[contains(text(),'Wait')]"));
  await waitBtn[0].click();
});