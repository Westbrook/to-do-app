import { html, fixture, expect } from '@open-wc/testing';
import 'axe-core/axe.min.js';
import { axeReport } from 'pwa-helpers/axe-report.js';

import '../src/to-do-write';
import { toDoEventNames } from '../src/to-do-events';

describe('<to-do-write>', () => {
  const newToDo = 'New To Do';
  let el;
  let newToDos;
  before(async () => {
    el = await fixture(
      html`
        <to-do-write></to-do-write>
      `,
    );
    el.addEventListener(toDoEventNames.NEW, () => {
      newToDos += 1;
    });
  });
  beforeEach(() => {
    newToDos = 0;
  });
  it('it has a11y', () => axeReport(el));
  it('announces a new to do', async () => {
    expect(newToDos).to.equal(0);
    el.todo = newToDo;
    const button = el.shadowRoot.querySelector('button');
    button.click();
    expect(newToDos).to.equal(1);
  });
  it('does not announce a blank new to do', async () => {
    expect(newToDos).to.equal(0);
    const button = el.shadowRoot.querySelector('button');
    button.click();
    expect(newToDos).to.equal(0);
  });

  it('does not announce a blank new to do from keyup of ENTER', async () => {
    expect(newToDos).to.equal(0);
    const textarea = el.shadowRoot.querySelector('textarea');
    const event = new CustomEvent('keyup', {
      detail: 0,
      bubbles: true,
      cancelable: true,
      composed: true,
    });
    event.keyCode = 13;
    event.code = 13;
    event.key = 'Enter';
    textarea.dispatchEvent(event);
    expect(newToDos).to.equal(0);
  });
  it('announces a new to do from keyup of ENTER', async () => {
    expect(newToDos).to.equal(0);
    el.todo = newToDo;
    const textarea = el.shadowRoot.querySelector('textarea');
    const event = new CustomEvent('keyup', {
      detail: 0,
      bubbles: true,
      cancelable: true,
      composed: true,
    });
    event.keyCode = 13;
    event.code = 13;
    event.key = 'Enter';
    textarea.dispatchEvent(event);
    expect(newToDos).to.equal(1);
  });
  it('does not announces a new to do from keyup of ENTER + SHIFT', async () => {
    expect(newToDos).to.equal(0);
    el.todo = newToDo;
    const textarea = el.shadowRoot.querySelector('textarea');
    const event = new CustomEvent('keyup', {
      detail: 0,
      bubbles: true,
      cancelable: true,
      composed: true,
    });
    event.keyCode = 13;
    event.code = 13;
    event.key = 'Enter';
    event.shiftKey = true;
    textarea.dispatchEvent(event);
    expect(newToDos).to.equal(0);
  });
  it('sets the value of the todo from the textarea', async () => {
    const textarea = el.shadowRoot.querySelector('textarea');
    textarea.value = newToDo;
    const event = new CustomEvent('input');
    textarea.dispatchEvent(event);
    expect(el.todo).to.equal(newToDo);
  });
  it('prevent ENTER input', async () => {
    const textarea = el.shadowRoot.querySelector('textarea');
    const event = new CustomEvent('keydown', {
      detail: 0,
      bubbles: true,
      cancelable: true,
      composed: true,
    });
    event.keyCode = 13;
    event.code = 13;
    event.key = 'Enter';
    textarea.dispatchEvent(event);
    expect(event.defaultPrevented).to.equal(true);
  });
  it('do not prevent ENTER + SHIFT input', async () => {
    const textarea = el.shadowRoot.querySelector('textarea');
    const event = new CustomEvent('keydown', {
      detail: 0,
      bubbles: true,
      cancelable: true,
      composed: true,
    });
    event.keyCode = 13;
    event.code = 13;
    event.shiftKey = true;
    event.key = 'Enter';
    textarea.dispatchEvent(event);
    expect(event.defaultPrevented).to.equal(false);
  });
});
