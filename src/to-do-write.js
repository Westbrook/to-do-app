import { LitElement, html, css } from 'lit-element';
import './growing-textarea';
import { eventNewToDo } from './to-do-events';
import { formElementFocus, formElementHover, toDoButton } from './shared-styles';
import { iconPlus } from './icons';

const shouldPreventKey = e => {
  if (!e.shiftKey && e.key === 'Enter') {
    e.preventDefault();
  }
};

class ToDoWrite extends LitElement {
  static get properties() {
    return {
      todo: { type: String },
    };
  }

  constructor() {
    super();
    this.todo = '';
  }

  setToDo(e) {
    this.todo = e.target.value;
  }

  newToDo() {
    if (!this.todo) return;
    this.dispatchEvent(eventNewToDo(this.todo.trim()));
    this.todo = '';
  }

  shouldCreateToDo(e) {
    if (!e.shiftKey && e.key === 'Enter') {
      this.newToDo();
    }
  }

  static get styles() {
    return [
      css`
        :host {
          display: block;
        }
        textarea:hover {
          ${formElementHover}
        }
        textarea:focus {
          ${formElementFocus}
        }
      `,
      toDoButton,
    ];
  }

  render() {
    return html`
      <growing-textarea value="${this.todo}">
        <textarea
          aria-label="Write the next thing you need to get done."
          id="todo"
          name="todo"
          placeholder="What needs to get done?"
          @input="${this.setToDo}"
          @keyup="${this.shouldCreateToDo}"
          @keydown="${shouldPreventKey}"
        ></textarea>
      </growing-textarea>
      <button @click="${this.newToDo}" title="Create New To Do">
        ${iconPlus}
      </button>
    `;
  }
}

customElements.define('to-do-write', ToDoWrite);
