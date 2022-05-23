import {LitElement, html} from 'lit';

class MyElement extends LitElement {
  render() {
    return html`<p>Hello from my template.</p>`;
  }
}
customElements.define('my-element', MyElement);