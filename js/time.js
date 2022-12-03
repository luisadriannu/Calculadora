export default function climate(climate) {
  const d = document;
  let $text = d.getElementById(climate),
    time = new Date(),
    hours = time.getHours();
  if (hours >= 0 && hours < 12) {
    $text.textContent = "Buenos dias⛅";
  } else if (hours >= 12 && hours < 18) {
    $text.textContent = "Buenas tardes☀️";
  } else if (hours >= 18 && hours < 24) {
    $text.textContent = "Buenas noches🌙";
  }

  // d.addEventListener("DOMContentLoaded", (e) => {
  // });
}
