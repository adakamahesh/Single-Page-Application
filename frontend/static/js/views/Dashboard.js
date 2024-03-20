//this is used importing Abstractview class from Abstractview.js file
import Abstractview from "./Abstractview.js";
//this is used Exporting a default class that extends Abstractview class
export default class extends Abstractview{
    constructor(){
        // Calling the constructor of the parent class
        super();
        // Setting the title of the document
        this.setTitle("Dashboard");
    }

    async getHtml(){
        // Returning HTML content as a template string
        return`
        <h1>Welcom back, Dom</h1>
        <p>
          Fugiat voluptate et nisi lorem cillum anim sit do eiusmod occaecat irure do.
        </p>
        <p>
          <a href="/posts" data-link>view recent posts</a>
        </p>
        `;
    }
}