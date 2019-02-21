import {
  html,
  fixture,
  expect,
  nextFrame,
} from '@open-wc/testing';

import '../src/open-wc-app';
import {
  eventCompleteToDo,
  eventNewToDo
} from '../src/to-do-events';

const toDosCount = (el) => el.todos.length;
const toDoElements = (el) => el.shadowRoot.querySelectorAll('to-do').length;
const toDoElement = (el, index) => el.shadowRoot.querySelectorAll('to-do')[index];
const firstToDo = (el) => el.todos[0];

describe('<open-wc-app>', () => {
  it('has a title', async () => {
    const el = await fixture(html`<open-wc-app></open-wc-app>`);
    const title = el.shadowRoot.querySelector('h1').textContent;
    expect(title).to.equal('open-wc');
  });
  it('adds a to do in response to a `todo-new` event', async () => {
    const newToDo = 'New To Do';
    const el = await fixture(html`<open-wc-app></open-wc-app>`);
    expect(toDosCount(el)).to.equal(0);
    expect(toDoElements(el)).to.equal(0);
    el.dispatchEvent(eventNewToDo(newToDo));
    await nextFrame();
    expect(toDosCount(el)).to.equal(1);
    expect(firstToDo(el)).to.deep.equal({id:0,todo:newToDo});
    expect(toDoElements(el)).to.equal(1);
    expect(toDoElement(el, 0).textContent).to.equal(newToDo);
  });
  it('removes a to do in response to a `todo-complete` event', async () => {
    const completeToDo = 'New To Do';
    const todoObject = [{id:0,todo:completeToDo}];
    const el = await fixture(html`<open-wc-app todos=${JSON.stringify(todoObject)}></open-wc-app>`);
    expect(toDosCount(el)).to.equal(1);
    expect(toDoElement(el, 0).textContent).to.equal(completeToDo);
    expect(firstToDo(el)).to.deep.equal({id:0,todo:completeToDo});
    el.dispatchEvent(eventCompleteToDo(0));
    await nextFrame();
    expect(toDosCount(el)).to.equal(0);
  });
});
