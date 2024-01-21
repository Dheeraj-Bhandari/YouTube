const mongoose = require("mongoose")

const UserModel = new mongoose.Schema({

    name: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
})

const Users = mongoose.model("User", UserModel);

module.exports = Users