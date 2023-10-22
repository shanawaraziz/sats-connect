import { chromium, Browser, BrowserContext, Page } from 'playwright';
import { expect } from 'chai';
import { getAddress } from '../src/addresses/index';
import { AddressPurpose } from '../src/addresses/types';
import { BitcoinNetworkType } from '../src/types';
import { GetAddressResponse } from '../src/addresses/index';

describe('sats-connect getAddress function', () => {
  let browser: Browser;
  let context: BrowserContext;
  let page: Page;

  before(async () => {
    // Open the browser in headed mode (with a visible UI)
    browser = await chromium.launch({ headless: false });
    context = await browser.newContext();
    page = await context.newPage();

    // Add a wait for the page to load
    await page.goto('about:blank'); // Load a blank page
  });

  after(async () => {
    // Add a wait before closing the browser
    await page.waitForTimeout(10000); // Wait for 2 seconds

    await browser.close();
  });

  it('should get payment address', async () => {
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
        expect(addresses).to.be.an('array');
        // Add more specific assertions as needed
      },
      onCancel: () => console.log('Request canceled'),
    };

    // Add a wait before executing the test
    await page.waitForTimeout(1000); // Wait for 1 second

    const response = await page.evaluate(async (options) => {
      return await getAddress(options);
    }, getAddressOptions);

    // Add assertions based on the response
    // For example, you can check response properties, types, and values.
    expect(response).to.be.an('object');
    // Add more specific assertions as needed
  });
});
