import { css } from 'lit-element';

export const formElementFocus = css`
  outline: none;
  background-image: linear-gradient(
    to top,
    #0077ff 0px,
    #0077ff 2px,
    transparent 2px,
    transparent 100%
  );
`;

export const formElementHover = css`
  background-image: linear-gradient(
    to top,
    currentColor 0px,
    currentColor 2px,
    transparent 2px,
    transparent 100%
  );
`;

export const toDoButton = css`
  button {
    background: none;
    padding: 0;
    border: 1px solid;
    width: var(--to-do-button-size);
    height: var(--to-do-button-size);
    text-align: center;
    line-height: var(--to-do-button-font-size);
    font-size: var(--to-do-button-font-size);
    font-weight: bold;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
  }
  button:hover {
    ${formElementHover}
  }
  button:focus {
    ${formElementFocus}
  }
  button svg {
    width: calc(var(--to-do-button-size) - 4px);
    height: calc(var(--to-do-button-size) - 4px);
  }
`;
