const d = document,
  $valorAnterior = d.getElementById("valor-anterior"),
  $valorActual = d.getElementById("valor-actual"),
  $botonesNumeros = d.querySelectorAll(".numero"),
  $botonesOperadores = d.querySelectorAll(".operador"),
  display = new Display($valorAnterior, $valorActual);

$botonesNumeros.forEach((boton) => {
  boton.addEventListener("click", () => {
    display.agregarNumero(boton.innerHTML);
  });
});

$botonesOperadores.forEach((boton) => {
  boton.addEventListener("click", () => {
    display.computar(boton.value);
  });
});
