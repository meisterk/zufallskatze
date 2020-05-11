export class View {
    constructor() {
        this.image = document.getElementById('catImage');
    }

    setCatImageURL(url) {
        this.image.setAttribute('src', url);
    }
}