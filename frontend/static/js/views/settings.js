import Abstractview from "./Abstractview.js";

export default class extends Abstractview{
    constructor(){
        super();
        this.setTitle("settings");
    }

    async getHtml(){
        return`
        <h1>setting</h1>
        <p>Manage your privacy and configuration.</p>
        `;
    }
}