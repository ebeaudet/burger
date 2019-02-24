// // Set up MySQL connection.
// var mysql = require("mysql");
// require('dotenv').config();
// var connection;

// if (process.env.JAWSDB_URL) {
//     connection = mysql.createConnection(process.env.JAWSDB_URL);
// } else {
//    connection = mysql.createConnection({
//         host: "localhost",
//         port: 3006,
//         user: "root",
//         password: "MySQLP@ssw0rd",
//         database: "burgers_db"
//     });
// }

// connection.connect(function(err) {
//   console.log(connection.config);
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }
//   console.log("are we here")
//   console.log("connected as id " + connection.threadId);
// });
// console.log("end of connectiosn")
// // Export connection for our ORM to use.
// module.exports = connection;



// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "MySQLP@ssw0rd",
  database: "burgers_db"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
