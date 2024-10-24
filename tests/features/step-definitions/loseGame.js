import { Given, When, Then } from '@cucumber/cucumber';
import { By, until, Key } from 'selenium-webdriver';
import { expect } from "chai";

Then("I want to se the gameover text", async function () {
  const description = await this.driver.findElements(By.className("description"));
  for (var e of description) {
    expect(await e.getText()).to.contain("You health has deteriorated too much – you feel almost dead.");
  }
});