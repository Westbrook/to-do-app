import { html } from 'lit-element';

export const iconPlus = html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    role="img"
    aria-labelledby="write-to-do"
  >
    <title id="write-to-do">Create New To Do</title>
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
`;

export const iconMinus = html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    role="img"
    aria-labelledby="complete-todo-label-1"
  >
    <title id="complete-todo-label-1">Complete To Do</title>
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
`;
