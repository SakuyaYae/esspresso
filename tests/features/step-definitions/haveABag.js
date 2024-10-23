import { Given, When, Then } from '@cucumber/cucumber';
import { By, until, Key } from 'selenium-webdriver';
import { expect } from "chai";

Given('i have clicked on the help button', async function () {
  const helpBtn = await this.driver.findElements(By.xpath("//*[contains(text(),'Help')]"));
  await helpBtn[0].click();
});

Given('i have clicked on go south', async function () {
  const southBtn = await this.driver.findElements(By.xpath("//*[contains(text(),'Go south')]"));
  await southBtn[0].click();
});

Given('i have clicked on go north', async function () {
  const northBtn = await this.driver.findElements(By.xpath("//*[contains(text(),'Go north')]"));
  await northBtn[0].click();
});


When('i click on go south', async function () {
  const southBtn = await this.driver.findElements(By.xpath("//*[contains(text(),'Go south')]"));
  await southBtn[0].click();
});

When('i click on go west', async function () {
  const westBtn = await this.driver.findElements(By.xpath("//*[contains(text(),'Go west')]"));
  await westBtn[0].click();
});
When('i click on go east', async function () {
  const eastBtn = await this.driver.findElements(By.xpath("//*[contains(text(),'Go east')]"));
  await eastBtn[0].click();
});
When('i click on go north', async function () {
  const northBtn = await this.driver.findElements(By.xpath("//*[contains(text(),'Go north')]"));
  await northBtn[0].click();
});


Then('my bag shoud be visible above the image', async function () {
  const bagElem = await this.driver.findElements(By.xpath("//*[contains(text(),'bag')]"));
  expect(bagElem).to.exist
});