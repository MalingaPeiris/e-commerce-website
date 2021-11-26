exports.getProducts = (req, res, next) => {
  res.status(200).json({
    sucess: true,
    message: "This route will show all products in database",
  });
};
