"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lit_1 = require("lit");
class MyElement extends lit_1.LitElement {
    render() {
        return (0, lit_1.html) `<p>Hello from my template.</p>`;
    }
}
customElements.define('my-element', MyElement);
//# sourceMappingURL=my-element.js.map