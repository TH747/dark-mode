let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector("#dark-mode-toggle");

// check if dark mode is enabled
// if it's enabled, turn it off
// if its disabled, turn it on

const enableDarkMode = () => {
  // 1. add the class darkMode to the body
  document.body.classList.add("darkmode");
  // 2. update darkMode in the local storage
  localStorage.setItem("darkMode", "enabled");
};

const disableDarkMode = () => {
  // 1. add the class darkMode to the body
  document.body.classList.remove("darkmode");
  // 2. update darkMode in the local storage
  localStorage.setItem("darkMode", null);
};

if (darkMode === "enabled") {
  enableDarkMode;
}

darkModeToggle.addEventListener("click", () => {
  darkMode = localStorage.getItem("darkMode");
  if (darkMode !== "enabled") {
    enableDarkMode();
    console.log(darkMode);
  } else {
    disableDarkMode();
    console.log(darkMode);
  }
});
