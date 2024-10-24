
import { Given, When, Then } from '@cucumber/cucumber';
import { By, until, Key } from 'selenium-webdriver';
import { expect } from 'chai';

When('I am in the cafe', async function(){
  const description = await this.driver.findElements(By.xpath("//*[contains(text(),'description')]"))
  expect(description).to.exist;
});

Then('I click the {string} button to leave the cafe', async function(a){
  const leaveCafe = await this.driver.findElements(By.xpath("//li[contains(text(),'Exit the cafe')]"))
  await leaveCafe[0].click();
});

When('I am in the Bar', async function(){
  const description = await this.driver.findElements(By.xpath("//*[contains(text(),'description')]"))
  expect(description).to.exist;
});

Then('I click the {string} button to leave the bar', async function(a){
  const leaveBar = await this.driver.findElements(By.xpath("//li[contains(text(),'Go west')]"))
  await leaveBar[0].click();
});

When('I am at the Music scene', async function(){
  const description = await this.driver.findElements(By.xpath("//*[contains(text(),'description')]"))
  expect(description).to.exist;
});

Then('I click the {string} button to leave the Music scene', async function (a) {
  const leaveMusicScene = await this.driver.findElements(By.xpath("//li[contains(text(),'Go east')]"))
  await leaveMusicScene[0].click();
});