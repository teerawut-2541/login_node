const express = require("express");
const ConnectionMysql = require("../sql/config");
const Router = express.Router();
const jwt = require('jwt-simple');
const SECRET = 'AAAAAAAA';
Router.post("/", (req, res) => {
  try {
    const payload = req.body;
    console.log(payload)
    var password_encode = jwt.encode(payload.password, SECRET);
    const sql =
      "INSERT INTO `db_react`.`users` (`username`, `password`, `fullname`, `phone`) VALUES ('" +
      payload.username +
      "','" +
      password_encode +
      "','" +
      payload.fullname +
      "','" +
      payload.phone +
      "')";
    ConnectionMysql.query(sql, (err, rows, fields) => {
      if (!err) {
        res.status(200).send(JSON.parse(JSON.stringify(rows)));
      } else {
        res.status(401).send(err);
      }
    });
  } catch (e) {
    res.status(404).send(e);
  }
});

module.exports = Router;
