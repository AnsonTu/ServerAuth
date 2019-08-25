// Create a user model to pass the correct fields and instructions to mongoose
// Mongoose is an ORM, a library that is used to interface with MongoDB
const mongoose = require("mongoose");
// Schema is used to tell mongoose what will be defined in the model
const Schema = mongoose.Schema;
// Bycrpt is used to encrypt passowords before they are saved
const bcrypt = require("bcrypt-nodejs");

// Define our model
const userSchema = new Schema({
  // Email must be a string, and must be unique before it can be saved
  // Change the string to lowercase, as MongoDB recognizes cases as two different strings
  email: { type: String, unique: true, lowercase: true },
  // Password is a string
  password: String
});

// On Save Hook, encrypt password
userSchema.pre("save", function(next) {
  const user = this;

  bcrypt.genSalt(10, function(err, salt) {
    if (err) {
      return next(err);
    }
    bcrypt.hash(user.password, salt, null, function(err, hash) {
      if (err) {
        return next(err);
      }

      user.password = hash;
      next();
    });
  });
});

// Create the model class
const ModelClass = mongoose.model("user", userSchema);

// Export the model
module.exports = ModelClass;
