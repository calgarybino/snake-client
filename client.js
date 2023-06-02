const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: "172.25.49.138", // IP address here,
    port: 50541, // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // event listener for incoming data
  conn.on("data", (data) => {
    console.log("Incoming data:", data);
    // Process the incoming data here if needed
  });
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: bin");
    //conn.write("Move: up");
  });

  return conn;
};

module.exports = connect;
