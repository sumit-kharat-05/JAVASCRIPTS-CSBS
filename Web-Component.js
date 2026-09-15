class CustomComponent extends HTMLElement
{
    connectedCallback()
    {
        const name = this.getAttribute("name");
        const id = this.getAttribute("id");
        this.innerHTML = `<label for=${id}>${name}</label>
        <input type="text" placeholder = "Enter Your Name"/><br/><br/>`;


    }
}
customElements.define("custom-element",CustomComponent);