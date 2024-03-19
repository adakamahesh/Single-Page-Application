import Abstractview from "./Abstractview.js";

export default class extends Abstractview{
    constructor(){
        super();
        this.setTitle("Dashboard");
    }

    async getHtml(){
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