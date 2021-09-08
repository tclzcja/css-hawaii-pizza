import ImportElement from "../import-element/import-element.js";

window.customElements.define(
	"delicious-soap",
	class extends ImportElement {
		constructor() {
			super();
		}
		connectedCallback() {
			super.connectedCallback();
			setTimeout(() => {
				this.classList.add("on");
			}, 2000);
		}
	}
);
