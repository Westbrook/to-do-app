import { LitElement, html, css } from 'lit-element';
import { eventCompleteToDo } from './to-do-events';
import { toDoButton } from './shared-styles';
import { iconMinus } from './icons';

class ToDo extends LitElement {
  static get properties() {
    return {
      todo: {
        type: Object,
      },
    };
  }

  constructor() {
    super();
    this.todo = {};
  }

  completeToDo() {
    this.dispatchEvent(eventCompleteToDo(this.todo.id));
  }

  static get styles() {
    return [
      css`
        :host {
          display: block;
        }
        div {
          border-top: 1px solid;
          padding-left: 5px;
          white-space: pre-wrap;
        }
      `,
      toDoButton,
    ];
  }

  render() {
    return html`
      <div>
        ${this.todo.todo}
      </div>
      <button @click="${this.completeToDo}" aria-label="Complete ${this.todo.todo} To Do">
        ${iconMinus}
      </button>
    `;
  }
}

customElements.define('to-do', ToDo);
