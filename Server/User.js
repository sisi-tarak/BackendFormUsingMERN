const mongoose = require("mongoose");

const mernBackendUsersSchema = new mongoose.Schema({
  studentname: "string",
  email: "string",
  mobileNo: "string",
  address: "string",
  collegename: "string",
  rollno: "string",
  branch: "string",
  studyyear: "string",
  academicperformance: "string",
  streamedfrom: "string",
  weeklyhours: "string",
  otherprograms: "string",
  projects: "string",
  github: "string",
  interesteddomain: "string",
  shortgoal: "string",
  internships: "string",
  linkedin: "string",
  interested: "string",
  expectation: "string",
  skills: "string",
  resume: "string",
  agree: "string",
});

const mernBackendUsersModal = mongoose.model(
  "mernBackendUsers",
  mernBackendUsersSchema
);

module.exports = mernBackendUsersModal;
