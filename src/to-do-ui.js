import { html } from 'lit-element';

export const renderTodo = todo => html`
  <to-do .todo="${todo}" role="listitem">${todo.todo}</to-do>
`;

export const renderTodos = todos => todos.map(renderTodo);
