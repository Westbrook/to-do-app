import { fixture, expect } from '@open-wc/testing';

import '../src/to-do';
import { toDoEventNames } from '../src/to-do-events';
import { renderTodo } from '../src/to-do-ui';

describe('<to-do>', () => {
  const newToDo = {
    id: 2,
    todo: 'New To Do',
  };
  it('is a to do', async () => {
    const el = await fixture(renderTodo(newToDo));
    expect(el.textContent).to.equal(newToDo.todo);
    expect(el.todoId).to.equal(newToDo.id);
  });
  it('completes a to do', async () => {
    const el = await fixture(renderTodo(newToDo));
    let completions = 0;
    el.addEventListener(toDoEventNames.COMPLETE, () => {
      completions += 1;
    });
    const completeButton = el.shadowRoot.querySelector('button');
    completeButton.click();
    expect(completions).to.equal(1);
  });
});
