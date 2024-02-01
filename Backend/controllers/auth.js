exports.register = (req, res) => {
  console.log(req.body);
  res.send("FORM submitted");
};
