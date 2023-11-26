exports.getBrands = (req, res) => {
    res.json({ message: "List of Brands", brands: ["kioti", "winnebago"] });
  };
  