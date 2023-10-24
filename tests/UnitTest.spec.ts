import { expect } from 'chai';
import { chromium, Browser, BrowserContext, Page } from 'playwright';
import { getAddress } from '../src/addresses/index';
import { AddressPurpose } from '../src/addresses/types';
import { BitcoinNetworkType } from '../src/types';
import { GetAddressResponse } from '../src/addresses/index';
import { BitcoinProvider } from '../src/provider';

// Describe the tests
describe('getAddress', () => {
  it('should return an address when valid purposes are provided', async () => {
    // Create test options
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
        debugger;
        console.log(addresses);
        // Add more specific assertions as needed
      },
      onCancel: () => console.log('Request canceled'),
    };

    const options = {
      payload: {
        purposes: [AddressPurpose.Payment],
      },
      getProvider: async () => {
        // Return a mock provider
        return {
          connect: async () => {
            return {};
          },
        };
      },
      onFinish: (response: Response) => {
        // Assert the response
        expect(response).to.exist;
      },
      onCancel: () => {
        // Not expected in this case
        throw new Error('onCancel should not be called');
      },
    };

    // Call the function and assert
    await getAddress(getAddressOptions);
  });

  it('should throw an error when purposes are missing', async () => {
    // Create test options with missing purposes
    const options = {
      payload: {},
      getProvider: async () => {
        // Return a mock provider
        return {
          connect: async () => {
            return {
              /* Mock response */
            };
          },
        };
      },
      onFinish: () => {
        // Not expected in this case
        throw new Error('onFinish should not be called');
      },
      onCancel: () => {
        // Not expected in this case
        throw new Error('onCancel should not be called');
      },
    };

    // Call the function and assert that it throws an error
    // expect(async () => await getAddress(options)).to.throw('Address purposes are required');
  });

  it('should handle errors during the request', async () => {
    // Create test options
    const options = {
      payload: {
        purposes: ['Payment'],
      },
      getProvider: async () => {
        // Return a mock provider that throws an error
        return {
          connect: async () => {
            throw new Error('Connection error');
          },
        };
      },
      onFinish: () => {
        // Not expected in this case
        throw new Error('onFinish should not be called');
      },
      onCancel: () => {
        // Expected in this case
        // You can add assertions here if needed
      },
    };

    // Call the function and assert
    //await getAddress(options);
  });
});
