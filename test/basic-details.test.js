import { html, fixture, expect } from '@open-wc/testing';
import { stub } from 'sinon';
import '../src/LoanBasicDetails/BasicDetails.js';

describe('Basic details', async () => {
  // Write test cases inside this block
  // refer basic-details.js files
  it('checks form', async () => {
    const el = await fixture(html `<basic-details></basic-details>`);
    const form = el.shadowRoot.querySelectorAll('lion-form');

    expect(form).to.be.accessible();
  })
});
