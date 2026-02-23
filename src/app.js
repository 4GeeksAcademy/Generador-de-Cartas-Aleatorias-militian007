// Definimos la función para que sea reutilizable
const generateCard = () => {
  let suits = ["heart", "diamond", "spade", "club"];
  let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  
  let icons = {
    heart: "♥",
    diamond: "♦",
    spade: "♠",
    club: "♣"
  };

  let randomSuit = suits[Math.floor(Math.random() * suits.length)];
  let randomValue = values[Math.floor(Math.random() * values.length)];

  let card = document.getElementById("card");

  // IMPORTANTE: Limpiamos las clases anteriores para que no se mezclen colores
  card.className = "card " + randomSuit;

  document.querySelector(".number").innerHTML = randomValue;
  document.querySelector(".top-suit").innerHTML = icons[randomSuit];
  document.querySelector(".bottom-suit").innerHTML = icons[randomSuit];
};

// 1. Ejecutar cuando la página carga por primera vez
window.onload = function() {
  generateCard();

  // 2. Ejecutar cuando se hace clic en el botón
  document.getElementById("generate-btn").addEventListener("click", generateCard);
};
