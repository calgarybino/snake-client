//Import the constants and message mapping
const { movements, messageMappings } = require("./constants");

//stores the active TCP connection object
let connection;
// setup interface to handle user input from stdin
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput); //event listener for stdin uses handleUserInput function that runs when input from keyboard received
  return stdin; //allow to listen for keyboard input and react to it
};

//to processes the received user input

const handleUserInput = function (keypress) {
  if (keypress === `\u0003`) {
    process.exit(); //terminate the program if 'ctrl + C' keypress
  }
  //if other than 'ctrl + C' pressed ,process the user input
  if (keypress.toLowerCase() in movements) {
    connection.write(movements[keypress.toLowerCase()]); //send the command string to server
  } else if (keypress.toLowerCase() in messageMappings) {
    sendCreativeMessage(keypress.toLowerCase());
  }
};
//Function to send a creative message to the server
const sendCreativeMessage = function (keypress) {
  const myMessage = messageMappings[keypress]; //search the message in the mappings object
  if (myMessage) {
    connection.write(`Say:${myMessage}`); // send the message to the server
  }
};

module.exports = { setupInput };
