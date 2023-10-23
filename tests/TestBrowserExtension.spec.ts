// import { test, expect } from '../fixtures/fixture';
// import { chromium, Browser, BrowserContext, Page } from 'playwright';
// import { getAddress } from '../src/addresses/index';
// import { AddressPurpose } from '../src/addresses/types';
// import { BitcoinNetworkType } from '../src/types';
// import { GetAddressResponse } from '../src/addresses/index';

// test('popup page', async ({ page, extensionId }) => {
//   //await page.goto(`chrome-extension://${extensionId}/options.html#/login`);
//   await page.goto(`chrome-extension://${extensionId}/options.html#/onboarding`);

//   // //await page.click('button:has-text("Restore Wallet")');

//   await page.click("//button/div"); //Skip

//   await page.click("//button"); //Accept

//   await page.click("//button/div"); //Backup Later

//   await page.click('input[type="password"]');
//   await page.waitForTimeout(1000);

//   await page.fill('input[type="password"]', 'Kakistan124!!');
//   await page.waitForTimeout(1000);

//   await page.click("//div/button/h1"); //Continue

//   await page.waitForTimeout(1000);

//   await page.fill('input[type="password"]', 'Kakistan124!!');

//   await page.click("//div/button/h1"); //Continue

//   await page.waitForTimeout(100000);

//   const newTab = await page.context().newPage();

//   await newTab.goto(`chrome-extension://${extensionId}/options.html#/login`);
//   await newTab.waitForTimeout(5000);

//   await newTab.click('input[type="password"]');
//   await newTab.waitForTimeout(1000);

//   await newTab.fill('input[type="password"]', 'Kakistan124!!');
//   await newTab.waitForTimeout(1000);

//   await newTab.click("//button/h1"); //Unlock

//   const currentURL = await newTab.url();

//   console.log('Current URL:', currentURL)

//   await newTab.waitForTimeout(15000);

//   //const newTab = await page.context().newPage();

//   await newTab.goto(`chrome-extension://${extensionId}/popup.html`);
//   await newTab.waitForTimeout(250000);

//   const getAddressOptions = {
//     payload: {
//       purposes: [AddressPurpose.Payment],
//       message: 'Address for receiving Ordinals and payments',
//       network: {
//         type: BitcoinNetworkType.Testnet,
//       },
//     },
//     onFinish: (response: GetAddressResponse) => {
//       const { addresses } = response;
//       console.log(addresses);
// //      expect(addresses).to.be.an('array');
//       // Add more specific assertions as needed
//     },
//     onCancel: () => console.log('Request canceled'),
//   };

//   // Add a wait before executing the test
//   //await page.waitForTimeout(1000); // Wait for 1 second

//   await getAddress(getAddressOptions);
//   await page.waitForTimeout(20000)

// //   await expect(page.locator('body')).toHaveText('my-extension popup');
// })
