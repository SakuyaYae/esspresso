
import { Given, When, Then } from '@cucumber/cucumber';
import { By, until, Key } from 'selenium-webdriver';
import { expect } from 'chai';

Then("I have five espressos and want to see the winning text", async function () {
  const win = await this.driver.findElements(By.className("description"));
  for (var e of win) {
    expect(await e.getText()).to.contain("Yes! You feel alive and pumping.Full of caffeine! You feel like... like... Luke Skywalker!");
  }
});

