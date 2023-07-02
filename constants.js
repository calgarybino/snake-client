const IP = "localhost"; // Replace with the actual IP address
const PORT = 50541; // Replace with the actual PORT number
const playerName = "BG"; //Initial name of the player

const movements = {
  w: "Move: up",
  a: "Move: left",
  s: "Move: down",
  d: "Move: right",
};
//define the message mappings as an object
const messageMappings = {
  h: "Hello!",
  j: "love this game!",
  k: "Good luck!",
};
module.exports = {
  IP,
  PORT,
  playerName,
  movements,
  messageMappings,
};
