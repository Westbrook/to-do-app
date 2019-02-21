import { LitElement, html, css } from 'lit-element';
import './to-do';
import {
  newToDos,
  addToDo,
  completeToDo,
  workLevelMessage
} from './to-do-manager'
import {
  openWCHeader,
  openWCFooter,
  openWCStyles
} from './open-wc'
import './to-do-write';
import {
  toDoEventNames
} from './to-do-events'

class OpenWcApp extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      todos: { type: Array }
    };
  }

  constructor() {
    super();
    this.title = 'open-wc';
    this.todos = newToDos();
    this.addEventListener(toDoEventNames.NEW, (e) => this.addToDo(e.detail));
    this.addEventListener(toDoEventNames.COMPLETE, (e) => this.completeToDo(e.detail));
  }

  addToDo(todo) {
    this.hasHadToDo = true;
    this.todos = addToDo(this.todos, todo);
  }

  completeToDo(completedId) {
    this.todos = completeToDo(this.todos, completedId);
  }

  static get styles() {
    return [
      openWCStyles,
      css`
        :host {
          --to-do-button-size: 30px;
          --to-do-button-font-size: calc(var(--to-do-button-size) - 4px);
        }
        section {
          width: 90%;
          max-width: 600px;
          display: grid;
          column-gap: calc(0.5 * var(--to-do-button-size));
          row-gap: calc(0.5 * var(--to-do-button-size));
          grid-template-columns: 1fr calc(2px + var(--to-do-button-size));
          align-items: start;
          text-align: left;
          font-size: calc(0.6 * var(--to-do-button-size));
          text-align: right;
        }
        h2 {
          display: contents;
          font-size: 18px;
          font-weight: normal;
        }
        h2::after {
          content: '';
        }
        to-do {
          text-align: left;
          display: contents;
          line-height: var(--to-do-button-size);
        }
        to-do-write {
          text-align: left;
          display: contents;
        }
      `,
    ];
  }

  get renderWorkLevelMessage() {
    if (this.hasHadToDo) {
      return html`
        <h2>${workLevelMessage(this.todos)}</h2>
      `;
    }
    return html``;
  }

  render() {
    const todos = this.todos.map(todo => html`
      <to-do todo-id="${todo.id}">${todo.todo}</to-do>
    `);
    
    return html`
      ${openWCHeader(this.title)}
      <section>
        ${this.renderWorkLevelMessage}
        ${todos}
        <to-do-write></to-do-write>
      </section>
      ${openWCFooter}
    `;
  }
}

customElements.define('open-wc-app', OpenWcApp);
