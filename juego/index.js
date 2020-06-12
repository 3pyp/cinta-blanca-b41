// Objetos HTML
var nombre = document.getElementById("nombre");
var start_btn = document.getElementById("start_btn");
var start_section = document.getElementById("start");
var game_section = document.getElementById("game");
var game_user_name = document.getElementById("game_user_name");
var select_user_weapon = document.getElementById("seleccionar-arma");
var play_btn = document.getElementById("play_btn");
var message = document.getElementById("mensaje");
var game_computer_weapon = document.getElementById("game-computer-weapon")

// Variables globales
var userName = "";
var userWeapon = "";
var compuWeapon = "";
var weapons = ["Piedra", "Papel", "Tijeras"];

// Funciones
function start() {
  userName = nombre.value;
  start_section.style.display = "none";
  game_section.style.display = "flex";
  game_user_name.innerText = userName;
}

function selectComputerWeapon() {
  return weapons[Math.floor(Math.random() * 3)];
}

function play() {
  userWeapon = select_user_weapon.value;
  compuWeapon = selectComputerWeapon();
  game_computer_weapon.innerText = compuWeapon
  compare();
}

function compare() {
  if (userWeapon === "Piedra" && compuWeapon === "Papel") {
    message.innerText = "La computadora gana";
  } else if (userWeapon === "Piedra" && compuWeapon === "Tijeras") {
  message.innerText = userName + " gana"
  } else if (userWeapon === "Papel" && compuWeapon === "Tijeras") {
    message.innerText = "La computadora gana";
  } else if (userWeapon === "Papel" && compuWeapon === "Piedra") {
    message.innerText = userName + " gana"
  } else if (userWeapon === "Tijeras" && compuWeapon === "Piedra") {
    message.innerText = "La computadora gana";
  } else if (userWeapon === "Tijeras" && compuWeapon === "Papel") {
    message.innerText = userName + " gana"
  } else {
    message.innerText = "Empate"
  }
}

// Asignacion de eventos
start_btn.addEventListener("click", start);
play_btn.addEventListener("click", play);
