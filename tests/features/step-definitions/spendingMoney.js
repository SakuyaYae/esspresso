
import { Given, When, Then } from '@cucumber/cucumber';
import { By, until, Key } from 'selenium-webdriver';
import { expect } from 'chai';

When('I press Buy an espresso', async function () {
  const buyEspresso = await this.driver.findElements(By.xpath("//li[contains(text(),'Buy an espresso')]"));
  await buyEspresso[0].click();
});

Then('My money should be reduced by {float} coins', async function (a) {
  const parent = await this.driver.findElement(By.className("money"));
  const currentMoney = await parent.findElement(By.className("val"));

  for (var number of currentMoney) {
    expect(parseInt(number.getText())).to.be.lessThan(10);
  }
});