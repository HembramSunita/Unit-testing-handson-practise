import { html, fixture, expect } from '@open-wc/testing';
import { stub } from 'sinon';
import '../src/Customer/Customer-details.js';

describe('customer details', async () => {
  // Write test cases inside this block
  it('checks form', async () => {
    const el = await fixture(html `<customer-details></customer-details>`);
    const form = el.shadowRoot.querySelectorAll('lion-form');

    expect(form).to.be.accessible();
  });

  it('clicks on submit', async () => {
    const el = await fixture(html `<customer-details></customer-details>`);
    const btn = el.shadowRoot.querySelector('#nextbtn');
    btn.click();
    // console.log(btn);
    
    // expect(btn).to.equal('Next');

  })
});
