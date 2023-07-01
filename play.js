const net = require("net");
const { connect } = require("./client");

connect();
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};
const handleUserInput = function (data) {
  // your code here
  switch (data) {
    case "\u0003": // Ctrl+C
      process.exit();
      break;
    case "w":
      // Action for the "w" key
      console.log("Moving up");
      break;
    case "a":
      // Action for the "a" key
      console.log("Moving left");
      break;
    case "s":
      // Action for the "s" key
      console.log("Moving down");
      break;
    case "d":
      // Action for the "d" key
      console.log("Moving right");
      break;
    default:
      // Handle any other key press
      console.log("Invalid key");
  }
};
const stdin = setupInput();
stdin.on("data", handleUserInput);
setupInput();
