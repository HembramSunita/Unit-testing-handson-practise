import { html, fixture, expect } from '@open-wc/testing';

import '../loan-application.js';

describe('LoanApplication', async () => {
  // Write test cases inside this block
  it('checks for accessibility', async () => {
    const el = await fixture(html  `<dash-board> </dash-board>`);
    expect(el).to.be.accessible();
  });
});
