const api = require("../models/api");

const path = require("path");

module.exports.apiHome = (req, res) => {
  res.render("addApiData");
};

module.exports.addData = async (req, res) => {
  try {
    const data = await api.create(req.body);
    return res.redirect("back");
  } catch (error) {
    res.send(error);
  }
};

module.exports.viewData = async (req, res) => {
  try {
    const UserData = await api.find({});
    res.render("viewData", { UserData });
  } catch (error) {
    res.send(error);
  }
};

module.exports.updateUser = async (req, res) => {
  try {
    const user = await api.findById(req.params.id);
    return res.render("editData", { singleUser: user });
  } catch (error) {
    console.log(error);
  }
};

module.exports.editUserData = async (req, res) => {
  try {
    await api.findByIdAndUpdate(req.body.user_id, {
      userName: req.body.userName,
      email: req.body.email,
      userInfo: req.body.userInfo,
    });
    res.redirect("/viewData");
  } catch (error) {
    console.log(error);
  }
};

module.exports.deleteUser = async (req, res) => {
  try {
    await api.findByIdAndDelete(req.params.id);
    res.redirect("/viewData");
  } catch (error) {
    console.log("data not found or delete");
  }
};
