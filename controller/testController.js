const getData = (req, res) => {
  if (!req.body.name) {
    res.status(400);
    throw new Error("Please enter all the fields");
  }
  res.status(200).json({
    message: req.body.name,
  });
};

const postData = (req, res) => {
  res.status(200).json({
    message: "this is a post request",
  });
};

const updateData = (req, res) => {
  res.status(200).json({
    message: `id no:${req.params.id} updated`,
  });
};

const deleteData = (req, res) => {
  res.status(200).json({
    message: `id no:${req.params.id} deleted`,
  });
};

module.exports = {
  getData,
  postData,
  deleteData,
  updateData,
};
