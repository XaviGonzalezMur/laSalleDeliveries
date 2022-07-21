import { Controller } from "https://unpkg.com/@hotwired/stimulus/dist/stimulus.js"

class KeynavController extends Controller {
    static targets = ["link"];
    
    connect() {
        console.log("I am alive!!", this.element)
    }

    follow(event) {
        // event.code: Digit1, Digit2,...
        let number = Number(event.code.slice(-1)) - 1;
        // Note: It is possible to avoid any coupling with HTML/CSS via 'targets'
        //let link = this.element.querySelectorAll(".nav-link")[number];
        let link = this.linkTargets[number];
        link && link.click(); // if link is defined, then click
    }
}

export { KeynavController }
