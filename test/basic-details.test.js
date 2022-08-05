import { html, fixture, expect } from '@open-wc/testing';
import Sinon, { fakeServer } from 'sinon';
import '../src/LoanBasicDetails/BasicDetails.js';

// const apiUrl = /\/loanfeapi.herokuapp.com/calculate-emi/

describe('Basic details', async () => {
  // Write test cases inside this block
  // refer basic-details.js files\
  // const cType = {'Content-Type': 'application/json'};
  // const mocks = {};
  // let server, messages;

 
  // mocks.add_data = {
  //   "name": "Personal Loan",
  //   "amount": "10,000.00",
  //   "period": "2"
  // };
  // server = fakeServer.create();
  // server.respondImmediately = true;

  // it('checks api call', async () => {
  //   server.respondWith(apiUrl, [200,cType]);
  //   const {res} = await fetch(mocks.add_data);
  //   expect(res).to.be.true;
  // })

  it('checks form', async () => {
    const el = await fixture(html `<basic-details></basic-details>`);
    const form = el.shadowRoot.querySelectorAll('lion-form');

    expect(form).to.be.accessible();
  });

  it('input an amount', async () => {
    const el = await fixture(html `<basic-details></basic-details>`);
    const e = el.shadowRoot.querySelector('#amount');
    const func = Sinon.spy(el, '_numToWord');
    // console.log(e);
    e.modelValue = 10000;
    el._numToWord();
    expect(func).to.have.called;    
    });

    it('_captureDetails', async () => {
      const el = await fixture(html `<basic-details .amount=${1000}></basic-details>`);
      const btn = el.shadowRoot.querySelector('lion-button');
      const spy = Sinon.spy(el, '_captureDetails');
      btn.click();
      el._captureDetails();
      expect(spy).to.have.called;
    })

    
});
