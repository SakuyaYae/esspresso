import { Given, When, Then } from '@cucumber/cucumber';
import { By, until, Key } from 'selenium-webdriver';
import { expect } from 'chai';

Given('I am in front of the cafe', async function () {
  By.xpath("//li[contains(text(),'Enter the cafe')]")
});

When('I press the {string} button', async function (string) {
  const help = await this.driver.findElements(By.xpath("//li[contains(text(),'Help')]"))
  //let helpBtn = help[0];
  await help[0].click();
});

Then('I should get a description of the game', async function () {
  const description = await this.driver.findElements(By.xpath("//*[contains(text(),'description')]"))
  expect(description).to.exist;
});