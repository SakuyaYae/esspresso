import { Given } from '@cucumber/cucumber';

Given('I visit the homepage', async function () {
  await this.driver.get("http://localhost:5500/frontend/");
});

Given('that i stand in front of the cafe', async function () {
  const enterCafeBtn = await this.driver.findElements(By.xpath("//li[contains(text(),'Enter the cafe')]"));
  expect(enterCafeBtn).to.exist
});