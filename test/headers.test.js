import { html, fixture, expect } from '@open-wc/testing';
import { stub } from 'sinon';
import '../src/header/Header.js';

describe('loan-header', async () => {
  // Write test cases inside this block
  it('loan-header', async () => {
    const el = await fixture(html `<loan-header></loan-header>`);
    const btn = el.shadowRoot.querySelector('#en-GB');
    btn.click();
  })
});
