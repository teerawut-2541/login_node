const express = require("express");
const ConnectionMysql = require("../sql/config");
const Router = express.Router();
const jwt = require('jwt-simple');
const SECRET = 'SMART_HOME_BU';
Router.get("/", (req, res) => {
  try {
    const payload = req.headers;
    var password_encode = jwt.encode(payload.password, SECRET);
    const sql ="SELECT id,username,fullname,phone FROM users WHERE username = ? AND password = ?"
    ConnectionMysql.query(sql,[payload.username,password_encode], (err, rows, fields) => {
      if (!err) {
        if(rows.length>0){
          res.status(200).send(JSON.parse(JSON.stringify(rows)));
        }else{
          res.status(401).send(JSON.parse(JSON.stringify(null)));
        }
      } else {
        res.status(401).send(err);
      }
    });
  } catch (e) {
    res.status(404).send(e);
  }
});

module.exports = Router;