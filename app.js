var app = require("express")();
const port = process.env.PORT || 5000;
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.listen(port, () => {
  console.log("server", port);
});
const cors = require("cors");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.get('/', function (req, res) {
    res.send('<h1>Hello</h1>');
});

const Register= require('./Router/Register');
app.use('/Register', Register);

const login= require('./Router/login');
app.use('/login', login);
