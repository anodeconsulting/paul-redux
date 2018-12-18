require("dotenv").config();
var cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(cors());
const User = require("./models/user");
const mongoose = require("mongoose");
// DB Config

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./config/keys").mongoURI;
const user1 = require("./config/keys").mongoUser;
const pass1 = require("./config/keys").mongoPass;
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  ) // Adding new mongo url parser
  .then(() => console.log("MongoDB Connected..."))
  .catch(err => console.log(err));

app.post("/api/signin", (req, res) => {
  console.log("query for singn");
  const { body } = req;
  const { password } = body;
  let { email } = body;
  console.log(body);

  email = email.toLowerCase();
  User.find(
    {
      email: email,
      password: password
    },
    (err, user) => {
      console.log(user.length);
      if (user.length != 1) {
        console.log("user not found");
        return res.status(404).send({
          success: false,
          message: "Error: Invalid User"
        });
      } else {
        console.log("user found");
        return res.send({
          success: false,
          message: "success"
        });
      }
    }
  );
});

app.get("/api/insert", (req, res) => {
  const newUser = new User({
    email: user1,
    password: pass1
  });

  User.find(
    {
      email: user1
    },
    (err, user) => {
      if (user.length == 1) {
        console.log("not inserting");
      } else {
        newUser
          .save()
          .then(item => {
            console.log("user created");
          })
          .catch(err => {
            console.log(err);
          });
      }
    }
  );

  res.send({ express: "Hello From Express" });
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));
