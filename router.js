// Export a functuon in node
module.exports = function(app) {
  // Route for root path
  // req (request) is the incoming http request
  // res (response) is the response that is returned to the user
  // next is used for error handling
  app.get("/", function(req, res, next) {
    res.send(["water bottle", "phone", "paper"]);
  });
};
