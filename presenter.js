import { RestAPI } from './restapi.js';
import { View } from './view.js';
export class Presenter {
    constructor() {
        this.restapi = new RestAPI();
        this.view = new View();
        this.getImage();
        setInterval(() => {
            this.getImage();
        }, 2000);
    }

    async getImage() {
        let imageURL = await this.restapi.getImageURL();
        console.log(imageURL);
        this.view.setCatImageURL(imageURL);
    }
}