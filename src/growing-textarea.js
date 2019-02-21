import { LitElement, html } from 'lit-element';
import { styles } from './growing-textarea-styles'

class GrowingTextarea extends LitElement {
  static get properties() {
    return {
      value: { type: String }
    };
  }

  constructor() {
    super();
    this.value = '';
    this.setValue = this.setValue.bind(this);
  }

  setValue(e) {
    this.value = e.target.value;
  }

  listenOnSlottedTextarea(e) {
    if (this.textarea) {
      this.textarea.removeEventListener('input', this.setValue)
    }
    const nodes = e.target.assignedNodes();
    const [textarea] = nodes.filter(node => node.tagName === 'TEXTAREA');
    if (!textarea) return;
    this.textarea = textarea;
    this.textarea.addEventListener('input', this.setValue);
  }

  static get styles() {
    return [
      styles,
    ];
  }

  render() {
    return html`
      <slot @slotchange=${this.listenOnSlottedTextarea}></slot>
      <span aria-hidden="true">${this.value}</span>
    `;
  }
}

customElements.define('growing-textarea', GrowingTextarea);
