import { html, fixture, expect } from '@open-wc/testing';
import 'axe-core/axe.min.js';
import { axeReport } from 'pwa-helpers/axe-report.js';

import '../src/growing-textarea';

describe('<growing-textarea>', () => {
  it('it has a11y', async () => {
    const el = await fixture(
      html`
        <growing-textarea><textarea aria-label="Test Area"></textarea></growing-textarea>
      `,
    );
    return axeReport(el);
  });
  it('binds an `input` listener to the slotted textarea', async () => {
    const el = await fixture(
      html`
        <growing-textarea></growing-textarea>
      `,
    );
    expect(el.value).to.equal('');
    el.innerHTML = '<textarea></textarea>';
    const textarea1 = el.querySelector('textarea');
    const value1 = 'New Value 1';
    textarea1.value = value1;
    await 0;
    textarea1.dispatchEvent(
      new CustomEvent('input', {
        bubbles: true,
        composed: true,
      }),
    );
    expect(el.value).to.equal(value1);
    el.innerHTML = '<textarea></textarea>';
    const textarea2 = el.querySelector('textarea');
    const value2 = 'New Value 2';
    textarea2.value = value2;
    await 0;
    textarea2.dispatchEvent(
      new CustomEvent('input', {
        bubbles: true,
        composed: true,
      }),
    );
    expect(el.value).to.equal(value2);
  });
  it('do not bind when there is not a `textarea`', async () => {
    const el = await fixture(
      html`
        <growing-textarea></growing-textarea>
      `,
    );
    expect(el.value).to.equal('');
    el.innerHTML = '<input></input>';
    const input = el.querySelector('input');
    const value = 'New Value';
    input.value = value;
    await 0;
    input.dispatchEvent(
      new CustomEvent('input', {
        bubbles: true,
        composed: true,
      }),
    );
    expect(el.value).to.equal('');
  });
});
