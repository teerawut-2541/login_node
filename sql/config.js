var mysql = require('mysql');
const config = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'db_react',
};
const ConnectionMysql = mysql.createConnection(config);

ConnectionMysql.connect(err => {
  if (!err) {
    console.log('Connected');
  } else {
    console.log('Connection Failed', err);
  }
});

module.exports = ConnectionMysql;