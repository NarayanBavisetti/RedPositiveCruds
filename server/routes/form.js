const express = require("express");
const user = require("../models/user");
const router = express.Router();

router.post("/add", async (req, res) => {
  const { name, phone, email, hobbies } = req.body;
  if (!name || !phone || !email || !hobbies) {
    return res.send({ msg: "Please fill all the details" });
  } else {
    const data = new user({
      name,
      number: phone,
      email,
      hobbies,
    });
    await data.save();
  }
});

router.get("/users", async (req, res) => {
  try {
    const data = await user.find();
    res.status(200).json(data);
  } catch (e) {
    console.log(e);
    res.status(500).json();
  }
});

router.put("/:id", async (req, res) => {
  const User = req.body;
  try {
    await user.updateOne({ _id: req.params.id }, User);
  } catch (error) {
    res.json({ message: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await user.deleteOne({ _id: req.params.id });
    res.json("User deleted sucessfully ");
  } catch (error) {
    res.json({ message: error.message });
  }
});

module.exports = router;
