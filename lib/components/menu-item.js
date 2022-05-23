// @ts-nocheck
import { LitElement, html, css } from "https://unpkg.com/lit-element?module";

class MenuItem extends LitElement {
  static properties = {
    title: { type: String },
    recipeText: { type: String },
    imageSrc: { type: String },
  };
  render() {
    return html`
      <div
        class="menu-item mb-3 container d-flex flex-row align-items-center justify-content-around"
      >
      <p class="recipe-title mobile" data-i18n-key="${this.title}">
            ${this.title}
          </p>
        <div class="px-5 pb-3">
          <img src="${this.imageSrc}" alt="" />
        </div>
        <div class="recipe container d-flex flex-column">
          <p class="recipe-title desktop" data-i18n-key="${this.title}">
            ${this.title}
          </p>
          <p class="description">${this.recipeText}</p>
        </div>
      </div>
    `;
  }
  createRenderRoot() {
    return this;
  }
}
customElements.define("menu-item", MenuItem);
