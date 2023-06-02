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
const handleUserInput = (key) => {
  if (key === "w") {
    connection.write("Move: up");
  } else if (key === "s") {
    connection.write("Move: down");
  } else if (key === "a") {
    connection.write("Move: left");
  } else if (key === "d") {
    connection.write("Move: right");
  } else if (key === "1") {
    connection.write("Say: Hello!");
  } else if (key === "2") {
    connection.write("Say: Howdy!");
  } else if (key === "3") {
    connection.write("Say: Cheers!");
  } else if (key === "4") {
    connection.write("Say: GG!");
  }

  // Example: Exiting the game on pressing the "Ctrl + C" key combination
  if (key === "\u0003") {
    process.exit();
  }
};
module.exports = {
  setupInput,
};
