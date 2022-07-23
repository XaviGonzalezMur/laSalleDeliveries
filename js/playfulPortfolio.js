window.addEventListener("load", () => window.setInterval(exchangePortfolioElements, 2000));

// Return a value between 'min' and 'max', included
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1) + min);
}

function exchangePortfolioElements() {
    // Elements to exchange in Portfolio
    let elements = document
        .getElementById("portfolio_grid")
        .querySelector(".form-group").children;
    // console.log([...elements]);

    if (elements.length < 2) {
        console.warn("Exchange is not possible!");
        return;
    }

    let first = getRandomIntInclusive(0, elements.length - 1);
    let second;
    do {
        second = getRandomIntInclusive(0, elements.length - 1);
    } while (first === second); // Loop to avoid repeated elements, which is useless

    console.log(`Exchange of the element ${first+1} with the element ${second+1}`);
    // const initialPortfolio = [];
    // [...elements].map(element => initialPortfolio.push(element.getElementsByTagName('img')[0].alt));
    // console.debug(initialPortfolio);

    elements.item(second).after(elements.item(first));
    elements.item(first).after(elements.item(second));

    // const finalPortfolio = [];
    // [...elements].map(element => finalPortfolio.push(element.getElementsByTagName('img')[0].alt));
    // console.debug(finalPortfolio);
}
