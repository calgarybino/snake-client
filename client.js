//Import the 'net' module
const net = require("net");
//import constant values module
const { IP, PORT, playerName } = require("./constants");
// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP, // IP address here,
    port: PORT, // PORT number here,
  });
  conn.on("connect", () => {
    console.log("Connected to game server");
    conn.write(`Name:${playerName}`);
  });

  conn.on("data", (data) => {
    console.log("Server says:", data);
  });

  conn.on("close", () => {
    console.log("Connection closed");
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};
module.exports = { connect };
