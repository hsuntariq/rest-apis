const errorHandling = (req, res, err, next) => {
  // sets the status code
  const statusCode = res.statusCode ? res.statusCode : 500;
  res.status(statusCode);
  // send back error
  res.json({
    error: err,
  });
};

module.exports = errorHandling;
