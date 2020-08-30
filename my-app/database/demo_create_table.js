var mysql = require('mysql');

var con = mysql.createConnection({
  host: "127.0.0.1",
  user: "pongthawat.sut",
  password: "Mai@021139",
  database: "mydb"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    // var sql = "ALTER TABLE customer ADD (name VARCHAR(255),address VARCHAR(255),age INT)";
    var sql = "ALTER TABLE customer ADD (id INT AUTO_INCREMENT PRIMARY KEY)";
    con.query(sql,function(err,result){
      if (err) throw err;
      console.log("table created");
    })
  });