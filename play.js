const connect = require("./client.js");
const handleUserInput = (key) => {
  // Exiting the game on pressing the "Ctrl + C" key combination
  if (key === "\u0003") {
    process.exit();
  }
};

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};
console.log("Connecting ...");
connect();
setupInput();
