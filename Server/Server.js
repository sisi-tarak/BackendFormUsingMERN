const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const mernBackendUsersModal = require("./User");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/");

app.post("/register", (req, res) => {
  mernBackendUsersModal
    .create(req.body)
    .then((mernBackendUsers) => res.json(mernBackendUsers))
    .catch((err) => res.json(err));
});

app.post("/login", (req, res) => {
  const { name, email } = req.body;
  mernBackendUsersModal.findOne({ name: name }).then((user) => {
    if (user) {
      if (user.email === email) {
        res.json("Success");
      } else {
        res.json("Email not found");
      }
    } else {
      json({ message: "No Record found" });
    }
  });
});

app.listen(3000, () => {
  console.log("Server is running");
});
