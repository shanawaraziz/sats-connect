import { chromium, Browser, Page, BrowserContext } from 'playwright';
import { getAddress } from '../src/addresses/index';
import { AddressPurpose } from '../src/addresses/types';
import { BitcoinNetworkType } from '../src/types';
import { GetAddressResponse } from '../src/addresses/index';

describe('Test with New Window', () => {
  let browser: Browser;
  let context: BrowserContext;
  let page: Page;

  before(async () => {
    browser = await chromium.launch({ headless: false });
    context = await browser.newContext();
    page = await context.newPage();
  });

  after(async () => {
    await browser.close();
  });

  it('should test a new window', async () => {
    const getAddressOptions = {
      payload: {
        purposes: [AddressPurpose.Payment],
        message: 'Address for receiving Ordinals and payments',
        network: {
          type: BitcoinNetworkType.Testnet,
        },
      },
      onFinish: (response: GetAddressResponse) => {
        const { addresses } = response;
        console.log(addresses);
        //      expect(addresses).to.be.an('array');
        // Add more specific assertions as needed
      },
      onCancel: () => console.log('Request canceled'),
    };

    // Execute JavaScript to open a new window
    // await page.evaluate(async (options) => {
    //   // Make the getAddress function return a serializable result
    //   return getAddress(options);
    // }, getAddressOptions);

    // Perform tests on the new page
    await page.goto('https://example.com');

    await getAddress(getAddressOptions);
    await page.waitForTimeout(20000);
    await page.waitForSelector('//button');
    // Replace with your test selector
    // Perform other tests here

    // Close the new page when done
    await page.close();
  });
});
