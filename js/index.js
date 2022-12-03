import modeNight from "./night-mode.js";
import climate from "./time.js";
const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  climate("climate");
});
modeNight(".mode-night", "dark-mode");
