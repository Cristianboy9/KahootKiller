console.log(("\n██ ▄█▀▄▄▄       ██░ ██  ▒█████   ▒█████  ▄▄▄█████▓ ██ ▄█▀ ██▓ ██▓     ██▓    ▓█████  ██▀███  \n ██▄█▒▒████▄    ▓██░ ██▒▒██▒  ██▒▒██▒  ██▒▓  ██▒ ▓▒ ██▄█▒ ▓██▒▓██▒    ▓██▒    ▓█   ▀ ▓██ ▒ ██▒\n▓███▄░▒██  ▀█▄  ▒██▀▀██░▒██░  ██▒▒██░  ██▒▒ ▓██░ ▒░▓███▄░ ▒██▒▒██░    ▒██░    ▒███   ▓██ ░▄█ ▒\n▓██ █▄░██▄▄▄▄██ ░▓█ ░██ ▒██   ██░▒██   ██░░ ▓██▓ ░ ▓██ █▄ ░██░▒██░    ▒██░    ▒▓█  ▄ ▒██▀▀█▄  \n▒██▒ █▄▓█   ▓██▒░▓█▒░██▓░ ████▓▒░░ ████▓▒░  ▒██▒ ░ ▒██▒ █▄░██░░██████▒░██████▒░▒████▒░██▓ ▒██▒\n▒ ▒▒ ▓▒▒▒   ▓▒█░ ▒ ░░▒░▒░ ▒░▒░▒░ ░ ▒░▒░▒░   ▒ ░░   ▒ ▒▒ ▓▒░▓  ░ ▒░▓  ░░ ▒░▓  ░░░ ▒░ ░░ ▒▓ ░▒▓░\n░ ░▒ ▒░ ▒   ▒▒ ░ ▒ ░▒░ ░  ░ ▒ ▒░   ░ ▒ ▒░     ░    ░ ░▒ ▒░ ▒ ░░ ░ ▒  ░░ ░ ▒  ░ ░ ░  ░  ░▒ ░ ▒░\n░ ░░ ░  ░   ▒    ░  ░░ ░░ ░ ░ ▒  ░ ░ ░ ▒    ░      ░ ░░ ░  ▒ ░  ░ ░     ░ ░      ░     ░░   ░ \n░  ░        ░  ░ ░  ░  ░    ░ ░      ░ ░           ░  ░    ░      ░  ░    ░  ░   ░  ░   ░\n"))
console.log("Created by Cristianboy9")
 
console.log(' ')
var Kahoot = require("kahoot.js-latest");
var colors = require('colors');    
const prompt = require('prompt-sync')();
const name = prompt('Name of Bots: ')
const pin = prompt('Game PIN: ');
number = 1
number2 = 1
setInterval(kahoot, 820)
function kahoot() {
const client = new Kahoot;
client.join(pin, name + (number++))
client.on("Joined", () => {
 console.log("Sended Bot: " + number2++);
}); 

client.on("QuizEnd", () => {
  console.log("Game Ended.");
});
}
