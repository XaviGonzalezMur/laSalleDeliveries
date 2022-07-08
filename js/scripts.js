window.addEventListener("load", () => {
  window.alert(new Date().toLocaleTimeString());
});

window.addEventListener("load", () => {
  const divs = document.getElementsByTagName('div');

  for (let div of divs) {
    div.addEventListener('mouseover', (event) => {
      const target = event.target;
      if (event.altKey) {
        target.classList.add("div_highlighted");
      }
    });

    div.addEventListener('mouseout', (event) => {
      const target = event.target;
      if (event.altKey) {
        target.classList.remove("div_highlighted");
      }
    });
  };
});

// Section scrolling version 1
// document.addEventListener('keydown', (event) => {
//     var code = event.code;

//     switch (code) {
//         case "Digit1":
//           window.location = "#who_we_are";
//           break;
//         case "Digit2":
//           window.location = "#services";
//           break;
//         case "Digit3":
//           window.location = "#portfolio";
//           break;
//         case "Digit4":
//           window.location = "#Location";
//           break;
//         case "Digit5":
//           window.location = "#email_us";
//           break;
//       }
//   }, false);

// Section scrolling version 2
(function addScrollNavigationWithKeysVersion2() {
  const navBarLinks = document.getElementById("navigation_bar").getElementsByClassName("nav-link");

  [...navBarLinks].forEach((element, i) => {
    document.addEventListener('keyup', (event) => {
      var code = event.code.slice(-1) - 1; // from 0 to 4

      if (code == i) {
        element.click();
      }
    });
  })
})();