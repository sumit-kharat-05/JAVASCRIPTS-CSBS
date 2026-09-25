class CustomComponent extends HTMLElement {
  connectedCallback() {
    const name = this.getAttribute("name");
    const id = this.getAttribute("id");
    const shadow = this.attachShadow({ mode: "open" });
    shadow.innerHTML = `<style>label{color:orange;font-weight:bold;}</style><label for=${id}>${name}</label>
        <input type="text" placeholder = "Enter Your Name"/><br/><br/>`;
  }
}
customElements.define("custom-element", CustomComponent);

function getAccess()
{
    const customElement = document.querySelector("#name");
    const customInputElement = customElement.shadowRoot.querySelector("#name");
    console.log(customInputElement.value);
}