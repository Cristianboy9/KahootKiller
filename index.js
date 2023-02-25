console.log(("\n██ ▄█▀▄▄▄       ██░ ██  ▒█████   ▒█████  ▄▄▄█████▓ ██ ▄█▀ ██▓ ██▓     ██▓    ▓█████  ██▀███  \n ██▄█▒▒████▄    ▓██░ ██▒▒██▒  ██▒▒██▒  ██▒▓  ██▒ ▓▒ ██▄█▒ ▓██▒▓██▒    ▓██▒    ▓█   ▀ ▓██ ▒ ██▒\n▓███▄░▒██  ▀█▄  ▒██▀▀██░▒██░  ██▒▒██░  ██▒▒ ▓██░ ▒░▓███▄░ ▒██▒▒██░    ▒██░    ▒███   ▓██ ░▄█ ▒\n▓██ █▄░██▄▄▄▄██ ░▓█ ░██ ▒██   ██░▒██   ██░░ ▓██▓ ░ ▓██ █▄ ░██░▒██░    ▒██░    ▒▓█  ▄ ▒██▀▀█▄  \n▒██▒ █▄▓█   ▓██▒░▓█▒░██▓░ ████▓▒░░ ████▓▒░  ▒██▒ ░ ▒██▒ █▄░██░░██████▒░██████▒░▒████▒░██▓ ▒██▒\n▒ ▒▒ ▓▒▒▒   ▓▒█░ ▒ ░░▒░▒░ ▒░▒░▒░ ░ ▒░▒░▒░   ▒ ░░   ▒ ▒▒ ▓▒░▓  ░ ▒░▓  ░░ ▒░▓  ░░░ ▒░ ░░ ▒▓ ░▒▓░\n░ ░▒ ▒░ ▒   ▒▒ ░ ▒ ░▒░ ░  ░ ▒ ▒░   ░ ▒ ▒░     ░    ░ ░▒ ▒░ ▒ ░░ ░ ▒  ░░ ░ ▒  ░ ░ ░  ░  ░▒ ░ ▒░\n░ ░░ ░  ░   ▒    ░  ░░ ░░ ░ ░ ▒  ░ ░ ░ ▒    ░      ░ ░░ ░  ▒ ░  ░ ░     ░ ░      ░     ░░   ░ \n░  ░        ░  ░ ░  ░  ░    ░ ░      ░ ░           ░  ░    ░      ░  ░    ░  ░   ░  ░   ░\n"))
console.log("Creado por Cristianboy9")
 
console.log(' ')
var Kahoot = require("kahoot.js-latest");
var colors = require('colors');    
const prompt = require('prompt-sync')();
const name = prompt('Nombre de los Bots: ')
const pin = prompt('Kahoot PIN: ');
number = 1
number2 = 1
setInterval(kahoot, 820)
function kahoot() {
const client = new Kahoot;
client.join(pin, name + (number++))
client.on("Unido", () => {
 console.log("Bot enviado: " + number2++);
}); 

client.on("QuizEnd", () => {
  console.log("Juego terminado.");
});
}
