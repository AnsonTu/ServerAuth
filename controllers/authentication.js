const User = require("../models/user");

// Export function for `/signup` route to return
exports.signup = function(req, res, next) {
  // Take information from request
  const email = req.body.email;
  const password = req.body.password;

  // Check if a user with the given email exists
  User.findOne({ email: email }, function(err, existingUser) {
    if (err) {
      return next(err);
    }

    // If a user with the email does exist, return an error
    if (existingUser) {
      return res.status(422).send({ error: "Email is in use" });
    }

    // If a user with email does not exist, create and save user record
    const user = new User({
      email: email,
      password: password
    });
    // Save the new user to the database
    user.save(function(err) {
      if (err) {
        return next(err);
      }

      // Respond to the request indicating the user was created
      res.json({ success: true });
      /* Return user will return the user's email and password
      res.json(user); */
    });
  });
};
