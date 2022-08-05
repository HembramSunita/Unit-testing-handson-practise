import { html, fixture, expect } from '@open-wc/testing';
// import { stub } from 'sinon';
import '../src/SuccessAndError/Success.js';
import '../src/SuccessAndError/Error.js';

describe('Success screen ', async () => {
  // Write test cases inside this block
  it('loan-success', async () => {
    const el = await fixture(html `<loan-success></loan-success>`);
    const btn = el.shadowRoot.querySelector('lion-button');
    btn.click();
  })
});

describe('error screen', async () => {
  // Write test cases inside this block
  it('loan-error', async () => {
    const el = await fixture(html `<loan-error></loan-error>`);
    const btn = el.shadowRoot.querySelector('lion-button');
    btn.click();
  })
});
