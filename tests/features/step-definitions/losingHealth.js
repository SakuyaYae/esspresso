import { Given, When, Then } from '@cucumber/cucumber';
import { By, until, Key } from 'selenium-webdriver';
import { expect } from 'chai';


Then('My health should reduce', async function () {
  const parent = await this.driver.findElement(By.className("health"));
  const currentHealth = await parent.findElement(By.className("val"));
  expect(parseInt(await currentHealth.getText())).to.be.lessThan(50);
});

When('I press Go north', async function () {
  const northBtn = await this.driver.findElements(By.xpath("//*[contains(text(),'Go north')]"));
  await northBtn[0].click();
});

Then('my health should increase', async function () {
  const parent = await this.driver.findElement(By.className("health"));
  const currentHealth = await parent.findElement(By.className("val"));
  expect(parseInt(await currentHealth.getText())).to.be.greaterThan(50);

});