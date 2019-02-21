import { html, css } from 'lit-element';
import { openWc } from './open-wc-logo';

export const openWCHeader = (title) => html`
  <header class="app-header">
    ${openWc}
    <h1>${title}</h1>
  </header>
`;

export const openWCFooter = html`
  <footer>
    🚽 Made with love by <a target="_blank" rel="noopener noreferrer" href="https://github.com/open-wc">open-wc</a>.
  </footer>
`;

export const openWCStyles = css`
  :host {
    text-align: center;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: #1a2b42;
  }

  header {
    margin: auto;
    padding: 20px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  svg {
    animation: app-logo-spin infinite 20s linear;
    flex-basis: 100px;
    max-height: 244px;
    width: 100%;
    flex-grow: 1;
  }

  footer {
    color: #4f4f4f;
    font-size: calc(10px + 0.5vmin);
    margin: 1em 0;
  }

  @keyframes app-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
