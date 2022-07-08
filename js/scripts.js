window.addEventListener("load", () => {
    window.alert(new Date().toLocaleTimeString());
});

window.addEventListener("load", () => {
    const divs = document.getElementsByTagName('div');

    for(let div of divs) {
        div.addEventListener('mouseover', (event) => {
            const target = event.target;
            if(event.altKey) {
                target.classList.add("div_highlighted");
            }
        });

        div.addEventListener('mouseout', (event) => {
            const target = event.target;
            if(event.altKey) {
                target.classList.remove("div_highlighted");
            }
        });
    };
});

document.addEventListener('keydown', (event) => {
    var code = event.code;

    switch (code) {
        case "Digit1":
          window.location = "#who_we_are";
          break;
        case "Digit2":
          window.location = "#services";
          break;
        case "Digit3":
          window.location = "#portfolio";
          break;
        case "Digit4":
          window.location = "#Location";
          break;
        case "Digit5":
          window.location = "#email_us";
          break;
      }
  }, false);
