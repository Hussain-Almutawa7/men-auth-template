const User = require("../models/user");
const bcrypt = require("bcrypt");

const home = (req, res) => {
    res.render("home.ejs");
}

const showSignUpForm = (req, res) => {
    res.render("auth/sign-up.ejs");
}

const signUp = async (req, res) => {
    const userInDatabase = await User.findOne({
        username: req.body.username
    });

    if(userInDatabase) return res.send("Username is already taken");

    const hashedPassword = bcrypt.hashSync(req.body.password, 10)

    let userData = {
        username: req.body.username,
        password: hashedPassword
    }

    const user = await User.create(userData);
    res.send(user)
}

module.exports = {
    home,
    showSignUpForm,
    signUp,
}
