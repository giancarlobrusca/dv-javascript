// Seleccionamos los BUTTONS con querySelectorAll
const buttons = document.querySelectorAll("button");

// buttonDO.addEventListener("click", playDoSound);

/* FOREACH:
  Recorrer un array [] y aplicar la misma función definida a cada elemento del mismo
*/

// Función flecha (arrow function): Característica ES6
buttons.forEach((button) => button.addEventListener("click", playDoSound));
// Aplica el eventListener a todos los buttons

// CALLBACK: Function que se pasa como argumento a otra function
function playDoSound(event) {
  const button = event.target;
  const note = button.dataset.note;

  const noteSound = document.getElementById(`sound${note}`);

  noteSound.pause();
  noteSound.currentTime = 0;
  noteSound.play();
}

// Eventos de teclado -----------
// keyup -> El evento se dispara cuando soltás una tecla
// keydown -> Detecta cuando una tecla es presionada
// keypress -> Detecta combinaciones de teclas
document.addEventListener("keydown", (event) => {
  const key = event.key;
  const button = document.querySelector(`button[data-key="${key}"]`);

  // TRUTHY/FALSY VALUES
  button && button.click(); // trigger
  // same as -> if (button) button.click()
  // same as -> button ? button.click() : null

  /* FALSY VALUES
      false
      0
      -0
      0n, -0n
      "", '', ``
      null
      undefined
      NaN
      document.all
  */
});

// -------------------

/////////////////////////// CALLBACK EXAMPLE

/*
function greeting(name) {
  alert(`Hello, ${name}`);
}

function processUserInput(callback) {
  const name = prompt("Please enter your name.");
  callback(name);
}

processUserInput(greeting);
*/
