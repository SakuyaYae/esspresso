import { Given, When, Then } from '@cucumber/cucumber';
import { By, until, Key } from 'selenium-webdriver';
import { expect } from 'chai';

const health = async function (driver) {
  const parent = await driver.findElement(By.className("health"));
  const healthSpan = await parent.findElements(By.className("val"));

  for (var number of healthSpan) {
    expect(await number.getText()).to.contain("50");
  }
  return number
}


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