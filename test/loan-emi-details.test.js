import { html, fixture, expect } from '@open-wc/testing';
import Sinon from 'sinon';
import '../src/LoanEMIDetails/LoanEMIDetails.js';

describe('Loan EMI details', async () => {
  // Write test cases inside this block

  // it('checks for accessibility', async () => {
  //   const el = await fixture(html  `<loanemi-details></loanemi-details>`);
  //   expect(el).to.be.accessible();
  // });

  it('loanemi-details', async () => {
    var dt = {
      // "interestRate": 10,
      // "monthlyEMI": 2,
      // "principal": 1000,
      // "interest": 3,
      // "totalAmount": 2000
    }
    const el = await fixture(html `<loanemi-details ._data=${dt}></loanemi-details>`);
    const spy = Sinon.spy(el, '_toBasicDetails');
    const btn = el.shadowRoot.querySelector('lion-button')[0];
    btn.click();
    expect(spy.called).to.be.true;   
  });
});
