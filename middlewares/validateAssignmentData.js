function validateAssignmentData(req, res, next) {
  //   const { title, description, categories } = req.body;

  /* มันไม่ออก งงจัด!
  const titleLenght = req.body.title;
  const descLenght = req.body.description;
  const categoryArray = req.body.categories;

  if (titleLenght.length > 35) {
    return res.status(400).json({
      message: "Title must not be over 35 characters",
    });
  }
  if (descLenght.length > 150) {
    return res.status(400).json({
      message: "Description must not exceed 150 characters",
    });
  }
  if (!Array.isArray(categoryArray) || categoryArray === 0) {
    return res.json({
      message: "Categories must be an array with at least 1 value",
    });
  }*/

  const body = req.body;

  if (body.title.length > 35) {
    return res
      .status(400)
      .json({ message: "Title must not be over 35 characters" });
  }

  if (body.description.length > 150) {
    return res
      .status(400)
      .json({ message: "Description must not exceed 150 characters" });
  }

  if (!Array.isArray(body.categories) || body.categories.length < 1) {
    return res
      .status(400)
      .json({ message: "Categories must be an array with at least 1 value" });
  }
  next();
}

export default validateAssignmentData;
