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
    browser = await chromium.launch();
    context = await browser.newContext();
    page = await context.newPage();
  });
  after(async () => {
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
        const { addresses } = response; // Destructure addresses from the response
        console.log(addresses);
        expect(addresses).to.be.an('array');
        // Add more specific assertions as needed
      },
      onCancel: () => console.log('Request canceled'),
    };

    const response = await page.evaluate(async (options) => {
      return await getAddress(options);
    }, getAddressOptions);
  });
});
