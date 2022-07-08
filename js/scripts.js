(function showLocalTimeWhenPageLoaded() {
  // When the window is loaded, show an alert window with the local time
  window.addEventListener("load", () => {
    window.alert(new Date().toLocaleTimeString());
  });
})();

(function showDivsWithBordersOnMouseOverAndAltKeyPressed() {
  // When the window is loaded...
  window.addEventListener("load", () => {
    const divs = document.getElementsByTagName('div');

    // ...add to every 'div', two listeners:
    for (let div of divs) {
      // When mouse is over...
      div.addEventListener('mouseover', (event) => {
        // ...and Alt key is pressed, a new CSS class is added to highlight the div (target)
        if (event.altKey) {
          // This CSS class must be defined in 'main-styles.css' file
          event.target.classList.add("div_highlighted");
        }
      });

      // When mouse is out...
      div.addEventListener('mouseout', (event) => {
        // ...and Alt key is pressed, the CSS class is removed (so it's disabled)
        if (event.altKey) {
          event.target.classList.remove("div_highlighted");
        }
      });
    };
  });
})();

// /* Section scrolling version 1.
//    Notice this code has all the combinations link-key hardcoded, so it's not change-proof. */
// (function addScrollNavigationWithKeysVersion1() {
//   // Adding just one listener to process all possible sections to scroll, when a key is down
//   document.addEventListener('keydown', (event) => {
//     let code = event.code;

//     switch (code) {
//       case "Digit1":
//         window.location = "#who_we_are";
//         break;
//       case "Digit2":
//         window.location = "#services";
//         break;
//       case "Digit3":
//         window.location = "#portfolio";
//         break;
//       case "Digit4":
//         window.location = "#Location";
//         break;
//       case "Digit5":
//         window.location = "#email_us";
//         break;
//     }
//   }, false);
// })();

// Section scrolling version 2
(function addScrollNavigationWithKeysVersion2() {
  const navBarLinks = document.getElementById("navigation_bar").getElementsByClassName("nav-link");

  [...navBarLinks].forEach((element, i) => {
    document.addEventListener('keyup', (event) => {
      var code = event.code.slice(-1) - 1; // from 0 to 4

      if (code === i) {
        element.click();
      }
    });
  })
})();