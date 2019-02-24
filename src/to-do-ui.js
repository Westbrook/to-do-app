import { html } from 'lit-element';

export const renderTodo = todo => html`
  <to-do todo-id="${todo.id}" other-attr="${todo}" role="listitem">${todo.todo}</to-do>
`;

export const renderTodos = todos => todos.map(renderTodo);
