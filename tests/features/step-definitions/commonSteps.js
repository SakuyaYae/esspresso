import { Given, When, Then } from '@cucumber/cucumber';
import { By, until, Key } from 'selenium-webdriver';

Given('I visit the homepage {string}', async function (string){
  await this.driver.get('http://localhost:5500/frontend/');
});
