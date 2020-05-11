export class RestAPI {
    async getImageURL() {
        const response = await fetch('https://aws.random.cat/meow');
        const myJSON = await response.json();
        const url = myJSON.file;
        return url;
    }
}