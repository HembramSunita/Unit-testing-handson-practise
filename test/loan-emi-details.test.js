import { html, fixture, expect } from '@open-wc/testing';
import Sinon from 'sinon';
import '../src/LoanEMIDetails/LoanEMIDetails.js';

describe('Loan EMI details', async () => {
  // Write test cases inside this block

  it('checks for accessibility', async () => {
    const el = await fixture(html  `<loanemi-details></loanemi-details>`);
    expect(el).to.be.accessible();
  });

  it('loanemi-details', async () => {
    const el = await fixture(html `<loanemi-details></loanemi-details>`);
    const spy = Sinon.spy(el, '_toBasicDetails');
    const btn = el.shadowRoot.querySelector('lion-button')[0].click();    
  });
});
