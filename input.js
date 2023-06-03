let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};
const moves = {
  w: "Move: up",
  a: "Move: left",
  s: "Move: down",
  d: "Move: right",
  1: "Say: Hello!",
  2: "Say: Bino!",
};
const handleUserInput = (key) => {
  console.log(key);
  if (moves[key]) {
    connection.write(moves[key]);
  }

  // Example: Exiting the game on pressing the "Ctrl + C" key combination
  if (key === "\u0003") {
    process.exit();
  }
};

module.exports = {
  setupInput,
};
