exports.getCategories = (req, res) => {
    res.json({ message: "List of Categories", categories: ["Motorcycles", "ATVs"] });
  };
  