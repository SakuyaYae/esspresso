
import { Given, When, Then } from '@cucumber/cucumber';
import { By, until, Key } from 'selenium-webdriver';
import { expect } from 'chai';

Then('I have {float} espressos and want to see the winning text', async function(a){
  const description = await this.driver.findElements(By.className("description"));
  for (var e of description) {
    expect(await e.getText()).to.contain("Yes! You feel alive and pumping. Full of caffeine! You feel like... like... Luke Skywalker!");
  }
});