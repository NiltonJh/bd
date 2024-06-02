const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    key: String,
    value: Object
});

module.exports = mongoose.model("users", userSchema);