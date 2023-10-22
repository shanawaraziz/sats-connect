// import assert from 'assert';
// import chai from 'chai';
// import { getAddress } from '../src/addresses/index';
// import { GetAddressResponse } from '../src/addresses/index';
// import { AddressPurpose } from '../src/addresses/types';
// import { BitcoinNetworkType } from '../src/types';
// const { JSDOM } = require('jsdom');

// // Create a DOM environment
// const dom = new JSDOM('<!doctype html><html><body></body></html>');
// global.window = dom.window;

// const expect = chai.expect;
// describe('Test Get Address Function', () => {
//   it('should get payment address', async function () {
//     const getAddressOptions = {
//       payload: {
//         purposes: [AddressPurpose.Payment],
//         message: 'Address for receiving Ordinals and payments',
//         network: {
//           type: BitcoinNetworkType.Testnet,
//         },
//       },
//       onFinish: (response: GetAddressResponse) => {
//         const { addresses } = response; // Destructure addresses from the response
//         console.log(addresses); // You can work with the addresses array here
//         expect(addresses).to.be.an('array');
//         // Add more assertions specific to the addresses array
//       },
//       onCancel: () => alert('Request canceled'),
//     };

//     await getAddress(getAddressOptions);
//   });
// });
