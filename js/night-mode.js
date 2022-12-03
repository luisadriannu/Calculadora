export default function modeNight(btn, classDark) {
  const d = document;
  const $themeBtn = d.querySelector(btn),
    $contenido = d.querySelectorAll("[data-dark]");
  let ls = localStorage;
  let mood = "🌙",
    sun = "☀️";

  const lightMode = () => {
    $contenido.forEach((el) => el.classList.add(classDark));
    $themeBtn.textContent = sun;
    ls.setItem("theme", "light");
  };
  const darkMode = () => {
    $contenido.forEach((el) => el.classList.remove(classDark));
    $themeBtn.textContent = mood;
    ls.setItem("theme", "dark");
  };

  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      if ($themeBtn.textContent === mood) {
        lightMode();
      } else {
        darkMode();
      }
    }
  });

  d.addEventListener("DOMContentLoaded", (e) => {
    if (ls.getItem("theme") === null) ls.setItem("theme", "dark");

    if (ls.getItem("theme") === "light") lightMode();

    if (ls.getItem("theme") === "dark") darkMode();
  });
}
