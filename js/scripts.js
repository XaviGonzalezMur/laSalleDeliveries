window.addEventListener("load", () => {
    window.alert(new Date().toLocaleTimeString());
});

window.addEventListener("load", () => {
    const divs = document.getElementsByTagName('div');

    for(let div of divs) {
        div.addEventListener('mouseover', (ev) => {
            const target = ev.target;
            if(ev.altKey) {
                target.classList.add("div_highlighted");
            }
        });

        div.addEventListener('mouseout', (ev) => {
            const target = ev.target;
            if(ev.altKey) {
                target.classList.remove("div_highlighted");
            }
        });
    };
});
