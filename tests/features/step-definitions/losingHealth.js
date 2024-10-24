import { Given, When, Then } from '@cucumber/cucumber';
import { By, until, Key } from 'selenium-webdriver';
import { expect } from 'chai';

const health = async function () {
  const parent = driver.findElement(By.className("health"));
  const healthSpan = await parent.findElement(By.className("val"));
  for (let number of healthSpan) {
    expect(await number.gettext()).to.contain("50");
  }
  return number
}


Then('My health should reduce', async function (string) {
  const parent = driver.findElement(By.className("health"));
  const currentHealth = await parent.findElement(By.className("val"));
  expect(currentHealth) < health();
});


When('I press Go north', async function (string) {
  const northBtn = await this.driver.findElements(By.xpath("//*[contains(text(),'Go north')]"));
  await northBtn[0].click();
});
