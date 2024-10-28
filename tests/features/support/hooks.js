import { Before, After, AfterStep, AfterAll } from '@cucumber/cucumber';
import { sleepBetweenSteps } from '../../config.js';

const sleep = ms => new Promise(res => setTimeout(res, ms));

Before(function () {
  return this.driver.manage().window().maximize();
});

AfterAll(function () {
  return this.driver.quit();
});

AfterStep(async function () {
  await sleep(sleepBetweenSteps);
});