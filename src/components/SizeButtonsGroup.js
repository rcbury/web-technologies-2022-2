export default class SizeButtonsGroup {
    constructor(buttonElement, sHandler, lHandler) {
        this.buttonElement = buttonElement;
        this.sButton = buttonElement.querySelector("#sButton");
        this.lButton = buttonElement.querySelector("#lButton");

        this.sButton.onclick = (() => 
        {
            this.sButton.classList.add("active");
            this.lButton.classList.remove("active");
            sHandler();            
        }).bind(this);

        this.lButton.onclick = (() => {
            this.sButton.classList.remove("active");
            this.lButton.classList.add("active");
            lHandler();
        }).bind(this);
    }

    render() {
        return this.buttonElement;
    }
}