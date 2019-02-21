import {
  html,
  fixture,
  expect,
} from '@open-wc/testing';

import '../src/to-do';
import { toDoEventNames } from '../src/to-do-events';

const toDo = todo => html`
  <to-do todo-id="${todo.id}">${todo.todo}</to-do>
`

describe('<to-do>', () => {
  const newToDo = {
    id: 2,
    todo: 'New To Do'
  };
  it('is a to do', async () => {
    const el = await fixture(toDo(newToDo));
    expect(el.textContent).to.equal(newToDo.todo);
    expect(el.todoId).to.equal(newToDo.id);
  });
  it('completes a to do', async () => {
    const el = await fixture(toDo(newToDo));
    let completions = 0;
    el.addEventListener(toDoEventNames.COMPLETE, () => {
      completions += 1;
    });
    const completeButton = el.shadowRoot.querySelector('button');
    completeButton.click();
    expect(completions).to.equal(1);
  });
});
