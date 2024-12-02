import { Given, When, Then } from '@cucumber/cucumber';
import { By, until, Key } from 'selenium-webdriver';
import { expect } from "chai";

Given('press the enter The cafe Button', async function () {

  const cafeBtn = await this.driver.findElements(By.xpath("//*[contains(text(),'Enter the cafe')]"));
  await cafeBtn[0].click();
});

Given('i have clicked on go west', async function () {
  const westBtn = await this.driver.findElements(By.xpath("//*[contains(text(),'Go west')]"));
  await westBtn[0].click();
});

Given('i have clicked on go east', async function () {
  const eastBtn = await this.driver.findElements(By.xpath("//*[contains(text(),'Go east')]"));
  await eastBtn[0].click();
});

Given('have a can of beer in my bag', async function () {
  const northBtn = await this.driver.findElements(By.xpath("//li[contains(text(),'Go north')]"));
  await northBtn[0].click();
  const eastBtn = await this.driver.findElements(By.xpath("//li[contains(text(),'Go east')]"));
  await eastBtn[0].click();

  for(let i=0; i<7; i++){
    const waitBtn2 = await this.driver.findElements(By.xpath("//*[contains(text(),'Wait')]"));
    await waitBtn2[0].click();
    var bagInv = await this.driver.findElements(By.className("bag-content"));
    if(bagInv.includes("a can of beer")){
      break;
    }
  }
   /*const waitBtn = await this.driver.findElements(By.xpath("//*[contains(text(),'Wait')]"));
  await waitBtn[0].click();
  
  const waitBtn2 = await this.driver.findElements(By.xpath("//*[contains(text(),'Wait')]"));
  await waitBtn2[0].click();
  const waitBtn3 = await this.driver.findElements(By.xpath("//*[contains(text(),'Wait')]"));
  await waitBtn3[0].click();
  const waitBtn4 = await this.driver.findElements(By.xpath("//*[contains(text(),'Wait')]"));
  await waitBtn4[0].click();
  const waitBtn5 = await this.driver.findElements(By.xpath("//*[contains(text(),'Wait')]"));
  await waitBtn5[0].click();
  const waitBtn6 = await this.driver.findElements(By.xpath("//*[contains(text(),'Wait')]"));
  await waitBtn6[0].click();
  const waitBtn7 = await this.driver.findElements(By.xpath("//*[contains(text(),'Wait')]"));
  await waitBtn7[0].click();
*/
  const westBtn = await this.driver.findElements(By.xpath("//li[contains(text(),'Go west')]"));
  await westBtn[0].click();
  const southBtn = await this.driver.findElements(By.xpath("//li[contains(text(),'Go south')]"));
  await southBtn[0].click();
 
  
  for (var e of bagInv) {
    expect(await e.getText()).to.contain("a can of beer");
  } 

});

When('I press Wait', async function () {
  const waitBtn = await this.driver.findElements(By.xpath("//*[contains(text(),'Wait')]"));
  await waitBtn[0].click();
});

When('I press exit the cafe', async function () {
  const exitCafe = await this.driver.findElements(By.xpath("//*[contains(text(),'Exit the cafe')]"));
  await exitCafe[0].click();
});

When('I press Jam whit the band', async function () {
  const jamBtn = await this.driver.findElements(By.xpath("//li[contains(text(),'Jam with the band')]"));
  if(jamBtn!== undefined){
     await jamBtn[0].click();  
  }
  if(jamBtn === undefined){
    console.log("hej")
    for(let i=0; i<7; i++){
      const waitBtn = await this.driver.findElements(By.xpath("//*[contains(text(),'Wait')]"));
      await waitBtn[0].click();
      const jamBtnExist = await this.driver.findElements(By.xpath("//li[contains(text(),'Jam with the band')]"));
      if(jamBtnExist !== undefined){
        await jamBtnExist[0].click(); 
        break;
      }
    }
  }

});

Then('I shoud have gotten {int} more money', async function (int) {
  const money = await this.driver.findElements(By.className("//span[contains(text(),'15')]"));
  for (var e of money) {
    expect(await e.getText() - 10).to.be.equal(int);
  }
});

Then('I shoud have a can of beer in my bag', async function () {
  const bagInv = await this.driver.findElements(By.className("bag-content"));
  for (var e of bagInv) {
    expect(await e.getText()).to.contain("a can of beer");
  }
});

Then('I shoud have the option to give the can of beer', async function () {
  const giveBeer = await this.driver.findElements(By.xpath("//li[contains(text(),'Give beer to barista')]"));
  await giveBeer[0].click();
});