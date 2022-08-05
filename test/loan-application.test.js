import { html, fixture, expect } from '@open-wc/testing';

import '../loan-application.js';
import Sinon from 'sinon';

describe('LoanApplication', async () => {
  // Write test cases inside this block
  it('checks for accessibility', async () => {
    const el = await fixture(html  `<loan-application> </loan-application>`);
    expect(el).to.be.accessible();
  });

  it ('__increment', async() => {
    const el = await fixture(html  `<loan-application .counter=${2}> </loan-application>`);
    
    const e = el.__increment();
    expect(el.counter).to.equal(3);
  })
});
