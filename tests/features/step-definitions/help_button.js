import { Given, When, Then } from '@cucumber/cucumber';
import { By, until, Key } from 'selenium-webdriver';
import { expect } from 'chai';

Given('I am in front of the cafe', async function () {
  By.xpath("//li[contains(text(),'Enter the cafe')]")
});

When('I press the {string} button', async function (string) {
  const help = await this.driver.findElements(By.xpath("//li[contains(text(),'Help')]"))
  await help[0].click();
});

Then('I should get a description of the game', async function () {
  const description = await this.driver.findElements(By.xpath("//*[contains(text(),'description')]"))
  expect(description).to.exist;  
});

Then('I click the {string} button to leave the help description', async function (string) {
  const leave = await this.driver.findElements(By.xpath("//li[contains(text(),'Continue')]"))
  await leave[0].click();
});


/*Given('I am in front of the cafe', async function () {
  By.xpath("//li[contains(text(),'Enter the cafe')]")
});*/

When('the user press the {string} button to enter the cafe', async function (string) {
  const enter = await this.driver.findElements(By.xpath("//li[contains(text(),'Enter the cafe')]"))
  await enter[0].click();
});

/*When('I press the {string} button', async function (string) {
  const help = await this.driver.findElements(By.xpath("//li[contains(text(),'Help')]"))
  await help[0].click();
});

Then('I should get a description of the game', async function () {
  const description = await this.driver.findElements(By.xpath("//*[contains(text(),'description')]"))
  expect(description).to.exist;
});*/


/*Given('I am in front of the cafe', async function () {
  By.xpath("//li[contains(text(),'Enter the cafe')]")
});*/

When('I press {string} button to go south', async function (string) {
  const south = await this.driver.findElements(By.xpath("//li[contains(text(),'Go south')]"))
  await south[0].click();
});

When('end up on the country side', async function () {
  const description = await this.driver.findElements(By.xpath("//*[contains(text(),'description')]"))
  expect(description).to.exist;
});

When('then press {string} button to go west', async function (string) {
  const west = await this.driver.findElements(By.xpath("//li[contains(text(),'Go west')]"))
  await west[0].click();
});

When('the user is at the Music scene', async function () {
  const description = await this.driver.findElements(By.xpath("//*[contains(text(),'description')]"))
  expect(description).to.exist;
});

/*When('I press the {string} button', async function (string) {
  const help = await this.driver.findElements(By.xpath("//li[contains(text(),'Help')]"))
  await help[0].click();
});

Then('I should get a description of the game', async function () {
  const description = await this.driver.findElements(By.xpath("//*[contains(text(),'description')]"))
  expect(description).to.exist;
});*/


/*Given('I am in front of the cafe', async function () {
  By.xpath("//li[contains(text(),'Enter the cafe')]")
});*/

When('I press {string} button to go north', async function (string) {
  const north = await this.driver.findElements(By.xpath("//li[contains(text(),'Go north')]"))
  await north[0].click();
});

When('end up on an empty street', async function () {
  const description = await this.driver.findElements(By.xpath("//*[contains(text(),'description')]"))
  expect(description).to.exist;
});

When('then press {string} button to go east', async function (string) {
  const east = await this.driver.findElements(By.xpath("//li[contains(text(),'Go east')]"))
  await east[0].click();
});

When('the user is at the Bar', async function () {
  const description = await this.driver.findElements(By.xpath("//*[contains(text(),'description')]"))
  expect(description).to.exist;
});

/*When('I press the {string} button', async function (string) {
  const help = await this.driver.findElements(By.xpath("//li[contains(text(),'Help')]"))
  await help[0].click();
});

Then('I should get a description of the game', async function () {
  const description = await this.driver.findElements(By.xpath("//*[contains(text(),'description')]"))
  expect(description).to.exist;
});*/
