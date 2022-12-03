import modeNight from "./night-mode.js";
import climate from "./time.js";
import operaciones from "./operaciones.js";
const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  climate("climate");
  operaciones();
});
modeNight(".mode-night", "dark-mode");
