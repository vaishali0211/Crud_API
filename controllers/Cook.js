const Cook = require("../models/Cook");

exports.getAllCooks = async (req, res) => {
  try {
    const cooks = await Cook.find();
    res.json(cooks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

exports.createCook = async (req, res) => {
  console.log('Handling createCook request');
  try {
    const newCookData = req.body;
    const newCook = new Cook(newCookData);
    newCook.createdAt = new Date();
    newCook.updatedAt = new Date();
    await newCook.save();
    res.status(201).json(newCook);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

exports.getOneCook = async (req, res) => {
  try {
    const cookId = req.params.id;
    const cook = await Cook.findById(cookId);
    res.json(cook);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

exports.updateCook = async (req, res) => {
  try {
    const cookId = req.params.id;
    const updatedCook = req.body;
    updatedCook.updatedAt = new Date();
    const result = await Cook.findByIdAndUpdate(cookId, updatedCook, {
      new: true,
    });
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

exports.deleteCook = async (req, res) => {
  try {
    const cookId = req.params.id;
    const result = await Cook.findByIdAndDelete(cookId);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};
