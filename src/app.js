/* eslint-disable */
import "bootstrap";
import "./style.css";

// funcion que al cargar la ventana genera un numero random y palo (suit) random
window.onload = () => {
  // funcion que genera numero random, con un array , hacemos un random al indice
  // para que elija aleatoriamente uno de esos numeros del AS al REY
  let generateRandomNumber = () => {
    let numbers = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K"
    ];
    let iNumbers = Math.floor(Math.random() * numbers.length);
    return numbers[iNumbers];
  };

  // aqui similar al random de arriba, con array, hacemos un random al indice que elige palo
  let generateRandomsimbolo = () => {
    let suit = ["♦", "♥", "♠", "♣"];
    let iSuit = Math.floor(Math.random() * suit.length);
    return suit[iSuit];
  };

  // esta variable randomsimbolo es para que nos genere el mismo palo arriba y abajo
  // ya que si llamamos 2 veces a la funcion en el window.onload, nos carga distintos palos
  let randomSimbolo = generateRandomsimbolo();

  // Aqui ya introducimos los valores

  document.querySelector(".number").innerHTML = generateRandomNumber(); //num random

  // el if sirve para poner el color rojo si es corazon o rombo
  // doc.query selecciona el top y botom palo del html y add con innerhtml el simbolo random que generamos abajo
  if (randomSimbolo == "♥" || randomSimbolo == "♦") {
    document.querySelector(".top-suit").innerHTML = randomSimbolo;
    document.querySelector(".top-suit").style.color = "red";
    document.querySelector(".bottom-suit").innerHTML = randomSimbolo;
    document.querySelector(".bottom-suit").style.color = "red";
  } else {
    document.querySelector(".top-suit").innerHTML = randomSimbolo;
    document.querySelector(".top-suit").style.color = "black";
    document.querySelector(".bottom-suit").innerHTML = randomSimbolo;
    document.querySelector(".bottom-suit").style.color = "black";
  }
};

// boton "PULSA PARA CAMBIAR CARTA" //
document.getElementById("botongo").addEventListener("click", window.onload);

// boton "CUENTA ATRAS" //
document.getElementById("botonCountdown").addEventListener("click", countdown);

function countdown() {
  let segundos = 3;
  const botonCuentaatras = document.getElementById("botonCountdown");
  botonCuentaatras.textContent = segundos;
  const cuenta = setInterval(function() {
    segundos--;
    botonCuentaatras.textContent = segundos;
    if (segundos === 0) {
      window.onload();
      botonCuentaatras.textContent = "CUENTA ATRÁS";
      clearInterval(cuenta);
    }
  }, 1000);
}

// PARA EL BOTON QUE CAMBIE A LOS X SEGUNDOS TAMBIÉN SE PUEDE HACER MAS FACIL
// AÑADIENDO EN EL BOTTON EN EL HTML LO SIGUIENTE:

// onclick="setTimeout('window.onload()',3000);"

// funcion para cambiar el tamaño de la carta:
let boton = document.getElementById("sizeboton");

boton.addEventListener("click", () => {
  let input1 = document.getElementById("inputnumber1");
  let input2 = document.getElementById("inputnumber2");
  let valorheight = input1.value;
  let valorwidth = input2.value;
  document.querySelector(".card").style.height = `${valorheight}px`;
  document.querySelector(".card").style.width = `${valorwidth}px`;
});

// funcion para restablecer el tamaño original
let botonrestablecer = document.getElementById("restablecer");
botonrestablecer.addEventListener("click", () => {
  document.querySelector(".card").style.height = `400px`;
  document.querySelector(".card").style.width = `250px`;
});
