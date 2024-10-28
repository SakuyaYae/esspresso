import seleniumWebdriver from 'selenium-webdriver';
import { setWorldConstructor, setDefaultTimeout } from '@cucumber/cucumber';
import { timeout, browser, headless } from '../../config.js';
import chrome from 'selenium-webdriver/chrome.js';

const options = new chrome.Options();
headless && options.addArguments('--headless=new');
const driver =  new seleniumWebdriver
.Builder()
.setChromeOptions(options)
.forBrowser(browser)
.build();
class CustomWorld {
  constructor() {
    this.driver = driver;
  }
}

setDefaultTimeout(timeout);
setWorldConstructor(CustomWorld);