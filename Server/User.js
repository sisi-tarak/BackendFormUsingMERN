const mongoose = require("mongoose");

const mernBackendUsersSchema = new mongoose.Schema({
  name: "string",
  email: "string",
  mobileNo: "string",
  address: "string",
  resume: "string",
});

const mernBackendUsersModal = mongoose.model(
  "mernBackendUsers",
  mernBackendUsersSchema
);

module.exports = mernBackendUsersModal;
