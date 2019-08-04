import { css } from 'lit-element';

export const styles = css`
  :host {
    display: block;
    position: relative;
    min-height: var(--to-do-button-size);
    width: 100%;
  }
  span,
  ::slotted(textarea) {
    min-height: var(--to-do-button-size);
    padding: 4px calc(0.25 * var(--to-do-button-size));
    font-size: calc(0.5 * var(--to-do-button-size));
    line-height: calc(var(--to-do-button-size) - 10px);
    box-sizing: border-box;
  }
  span {
    border: 1px solid;
    display: block;
    white-space: pre-wrap;
  }
  ::slotted(textarea) {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    border: 1px solid black;
    resize: none;
    font-family: inherit;
    z-index: 2;
  }
  ::slotted(label) {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
  }
`;
