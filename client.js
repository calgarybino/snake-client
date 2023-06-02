const net = require("net");
const { IP, PORT } = require("./constants");
const connect = function () {
  const conn = net.createConnection({
    host: IP, // IP address here,
    port: PORT, // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("connect", () => {
    //conn.write("Say:Hello");
    console.log("Connected to server");
  });
  conn.on("data", (data) => {
    console.log("Received data from server:", data.toString());
  });
  conn.on("end", () => {
    console.log("Disconnected from server");
  });
  conn.on("error", (err) => {
    console.error("Error:", err);
    // Your code here...
  });
};
module.exports = { connect };
